const megaman = () => ({
  systemCall: {
    configurar
  }
})

const configurar = () => {
    //const firstName = prompt('Hola, Mi nombre es megaman, cual es tu nombre?')
    localStorage.setItem('firstName', 'jhon');
}

export default megaman;
