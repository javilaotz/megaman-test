const megaman = () => ({
  systemCall: {
    configurar,
    reset
  }
})

const configurar = () => {
    const firstName = prompt('Hola, Mi nombre es megaman, cual es tu nombre?')
    localStorage.setItem('firstName', firstName);
}

const reset = () => {
  localStorage.clear();
}

export default megaman;
