export function validateInput(
     inputs: NodeListOf<HTMLInputElement>,
     messages: NodeListOf<HTMLElement>,
     rules: Record<string, { expression: RegExp, messageError: string }>
) {
     /**
      * We go through the inputs
     */
     inputs.forEach((input, index) => {
          /**
           * Add a write event to text boxes
          */
         input.addEventListener("input", e => {
              const content = input.value;
              const field = input.name;
              const small = messages.item(index);

              const rule = rules[field];
              const result = rule.expression.test(content);
              const message = rule.messageError;
              setMessageInput(input, small, result, message);
         });

         /**
          * Add a loss of focus event to text boxes
          */
         input.addEventListener("blur", e => {
          const content = input.value;
          const field = input.name;
          const small = messages.item(index);

          const rule = rules[field];
          const result = rule.expression.test(content);
          const message = rule.messageError;
          setMessageInput(input, small, result, message);
         });
     });
}

export function setMessageInput(
     input: HTMLInputElement,
     small: HTMLElement,
     result: boolean,
     message = "Este campo es incorrecto"
): void {
     small.classList.remove("text-muted");

     if (result) {
          // Remove error class
          input.classList.remove("is-invalid");
          small.classList.remove("invalid-feedback");

          // Add success class
          input.classList.add("is-valid");
          small.classList.add("valid-feedback");
          small.textContent = "Campo completado";
     } else {
          // Remove success class
          input.classList.remove("is-valid");
          small.classList.remove("valid-feddback");

          // Add error class
          input.classList.add("is-invalid");
          small.classList.add("invalid-feedback");
          small.textContent = message;
     }
}
