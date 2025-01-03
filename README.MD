# 🎮 **Move Element**

Este projeto é uma classe que permite adicionar movimento e ação a elementos HTML de forma simples e eficiente. Ao instanciar a classe, você pode mover um elemento pela tela e adicionar uma função personalizada que será executada ao clicar nele.

---

## 🚀 **Funcionalidades**

- **Movimento de Elementos**: Permite mover elementos HTML arrastando-os com o mouse ou toque.
- **Ação Personalizada**: Adicione uma função que será executada ao clicar no elemento.
- **Compatibilidade com Dispositivos**: Funciona em desktops e dispositivos móveis.
- **Posicionamento Persistente**: Salva e restaura a posição do elemento utilizando `localStorage`.
- **Restrições de Movimento**: Garante que o elemento permaneça dentro dos limites da janela.
- **Eventos de Resize**: Reajusta a posição do elemento ao redimensionar a janela.

---

## 🛠️ **Tecnologias Utilizadas**

- **HTML5**: Estruturação do elemento a ser movido.
- **CSS3**: Estilização básica.
- **JavaScript**: Implementação da lógica de movimento, persistência e eventos.

---

## 🔧 **Como Usar o Projeto**

<a href="https://vinicius-rodriguess.github.io/Interactive-Element/" target="_blank">Clique aqui para testar o projeto!</a>

<img src="./src/img/Move Element.png"/>

Ou então:

1. **Clone este Repositório**:

    ```bash
    git clone https://github.com/seu-usuario/move-element.git
    cd move-element
    ```

2. **Inclua o Código no Seu Projeto**:
    Copie o código da classe `MoveElement` para o seu projeto e instancie-a conforme necessário.

3. **Adicione um Elemento HTML**:
    Certifique-se de que o elemento que você deseja mover esteja no DOM e tenha um seletor correspondente.

4. **Instancie a Classe**:
    Substitua `element` e `functionToExecute` no código de exemplo abaixo com o elemento e a função desejados:

    ```javascript
    const open = () => {
        alert("Ativado");
    };

    const element = document.querySelector(".element");
    const moveElement = new MoveElement(element, open);
    ```

---

## ✅ **Melhorias Futuras**

- Adicionar suporte para diferentes modos de movimento, como rotação ou redimensionamento.
- Permitir múltiplos elementos configuráveis ao mesmo tempo.
- Implementar animações durante o movimento do elemento.

---

## 👨‍💻 **Autor**

**Vinicius Rodrigues**

- GitHub: [Vinicius-Rodriguess](https://github.com/Vinicius-Rodriguess)
- Email: rodrigues.vini.2004@gmail.com
