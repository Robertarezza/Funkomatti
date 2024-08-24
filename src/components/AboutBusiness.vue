<script>


export default {
    components: {
       
    },

    data() {
        return {

        }
    },
}
</script>


<template>
    <div class="title-cont title-color header-animation">
        <h1 class="text-center mb-5">About Us</h1>
    </div>
    <div class="back-col"></div>
    <section class="container">
        <div class="two-column d-flex align-item-center">
            <div class="left-content d-flex flex-column align-items-center justify-content-center me-5">
                <h1>We are a creative <span class="title-color">web design agency</span></h1>
                <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatibus amet officiis non
                    ipsum
                    laborum, porro quisquam, eaque cupiditate perferendis exercitationem magnam distinctio eum?
                    Quam,
                    maxime asperiores? Odio, provident voluptates.</p>
             

            </div>
            <img src="../assets/img/about-img/woman-hero.jpg" alt="agency woman">
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use"../style/partials/_variables" as*;

.title-cont {
    padding-top: 80px;
    background-image: $third-background;

    h1 {
        padding: 4rem 0;
        box-shadow: inset gray 0px 10px 20px -10px;
        font-size: 3rem;
        font-weight: 600;
    }
}

.two-column img {
    margin-top: 5rem;
}

.back-col {
    background-image: $third-background;
    height: 100%;
    width: 80%;
    position: absolute;
    z-index: -1;
}

.header-animation {
    animation: header-fade-out linear forwards;
    animation-timeline: view();
    animation-range: exit;
}

@keyframes header-fade-out {
    25%{
        opacity: 0;
    }
    100%{
        opacity: 0;
    }
}
</style>