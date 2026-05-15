let blogCards = document.getElementById("blogCards");

let blogs = [
    {
        img: "./assets/images/img35.jpg",
        title: "Shopify vs WooCommerce: What's the better?",
        desc: "What's the best website builder for an e-commerce? In the world of eCommerce, choosing the right platform can mean the difference between success..."
    },

    {
        img: "./assets/images/img36.jpg",
        title: "100 Best Free Fonts for Designers in 2025",
        desc: "Typography is currently playing a central role in web design, with progressive improvements like Variable Fonts, CSS Shapes, FlexBox"
    },

    {
        img: "./assets/images/img37.jpg",
        title: "Trendy Gradients in Web Design",
        desc: "This year we have seen many&nbsp;multicolored gradients with vibrant color palettes and irregular shapes with blur and distortion effects. Gradients..."
    },

    {
        img: "./assets/images/img38.jpg",
        title: "30 Great Websites with Parallax Scrolling",
        desc: "The parallax effect has been around for years in classic video games, but it&nbsp;became a trend in the web design world. This cool effect is..."
    }
];

blogs.forEach((blog) => {

    blogCards.innerHTML += `

    <div class="blogCard">

        <img src="${blog.img}" alt="">

        <div class="blogText">

            <h3>${blog.title}</h3>

            <p>${blog.desc}</p>

        </div>

    </div>

  `;
});