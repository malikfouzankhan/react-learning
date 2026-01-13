const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Visit Google"
};

const mainContainer = document.querySelector("#root");

function customRender(el, container)
{
    const domElement = document.createElement(el.type);
    domElement.innerHTML = el.children;
    console.log(domElement);

    for(const prop in el.props)
    {
        domElement.setAttribute(prop, el.props[prop]);
    }
    console.log(domElement);

    container.append(domElement);
}

customRender(reactElement, mainContainer);