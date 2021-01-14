import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import fetch from '../fetch';

import { useAuth } from './auth';
import swal from 'sweetalert2';

const SupportContext = createContext({});

function SupportProvider({ children }) {
  const { token } = useAuth();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [popularQuestions, setPopularQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [isSupportLoaded, setIsSupportLoaded] = useState(false);

  useEffect(() => {
    if (token) {
      getFaq();
    }
  }, [activeCategory]);

  const getFaq = async () => {
    if (activeCategory) {
      const payload = await fetch(`/faq/getAll/${activeCategory.id}`);
      setQuestions(payload.data);
    } else {
      const payload = await fetch(`/faq/getAll`);
      setQuestions(payload.data);
    }
  };

  const getPopular = async () => {
    const payload = await fetch(`/faq/getMain`);

    setPopularQuestions(payload.data);
  };

  const getCategories = async () => {
    try {
      const payload = await fetch('/faq/categories');

      setCategories(payload);
      setIsSupportLoaded(true);
    } catch (err) {
      console.error('>>> API Error: ', err);
    }
  };

  const storeFaq = async (name, message) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('name', name);
      formData.append('question', message);

      if (activeCategory) {
        formData.append('category_id', activeCategory.id);
      }
      const response = await fetch(`/faq/store`, {
        method: 'POST',
        data: formData,
      });
      getFaq();
      await swal.fire('Done', response.message, 'success');
      setLoading(false);
    } catch (error) {
      const message = error.response.data.message
        ? error.response.data.message
        : Object.values(error.response.data)[0][0];
      await swal.fire('Failed', message, 'error');
      setLoading(false);
    }
  };

  const storeFaqToFaq = async (questionId, message) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('answer', message);
      const response = await fetch(`/faq/${questionId}/answer`, {
        method: 'POST',
        data: formData,
      });
      getFaq();
      await swal.fire('Done', response.message, 'success');
      setLoading(false);
    } catch (error) {
      const message = error.response.data.message
        ? error.response.data.message
        : Object.values(error.response.data)[0][0];
      await swal.fire('Failed', message, 'error');
      setLoading(false);
    }
  };

  useEffect(() => {
    getPopular();
    if (token) {
      getCategories();
    }
  }, [token]);

  return (
    <SupportContext.Provider
      value={{
        categories,
        loading,
        activeCategory,
        setActiveCategory,
        popularQuestions,
        questions,
        getCategories,
        getPopular,
        storeFaq,
        storeFaqToFaq,
        isSupportLoaded,
      }}
    >
      {children}
    </SupportContext.Provider>
  );
}

SupportProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useSupport = () => {
  return useContext(SupportContext);
};

export { SupportProvider, useSupport };
