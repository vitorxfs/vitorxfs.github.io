function handleInternationalization() {
  const languages = {
    'en': 'en',
    'es': 'es',
  };

  const userLang = navigator.language.split('-')[0];

  if (window.location.pathname !== '/') {
    return;
  }

  if (Object.keys(languages).includes(userLang)) {
    window.location.replace(languages[userLang]);
  }
}

handleInternationalization()
