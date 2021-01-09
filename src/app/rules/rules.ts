export const rules = {
     email: {
          expression: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
          messageError: "El email es invalido."
     },
     password: {
          expression: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/,
          messageError: "Debe contener al menos 8 caracteres, una mayuscula, una minuscula, un numero y un simbolo. Ademas, sin espacios en blanco"
     }
}
