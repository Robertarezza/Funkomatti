<script>
export default {
    props: {
        cardData: Object,
    },
    data() {
        return {
        }
    },
}
</script>

<template>
    <div class="ms-card">
        <!-- FRONT CARD IMAGE -->
        <div class="front-card">
            <img :src="cardData.path" alt="cardData.name">
        </div>
        <!-- BACK CARD DATA -->
        <div class="back-card text-center p-3">
            <h3>{{ cardData.name }}</h3>
            <h6>{{ cardData.role }}</h6>
            <p>{{ cardData.text }}</p>
            <hr>
            <!-- SOCIAL -->
            <div class="social-icon d-flex gap-3 justify-content-start">
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use"../style/partials/_variables" as*;

.ms-card {
    position: relative;


    &:hover .back-card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-image: $transp-primary;
        color: white;
        animation: mymove 1s 1;
        animation-fill-mode: forwards;
        border-radius: 15px;
    }

    @keyframes mymove {
        0% {
            scale: 0;
        }

        25% {
            scale: 0.8;
        }

        100% {
            scale: 1.03;
        }
    }

    .back-card {
        scale: 0;
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;

        hr {
            border: 1px solid white;
            width: 80%;
        }

        .social-icon {
            font-size: 1.2rem;
            cursor: pointer;
        }

        i:hover {
            color: black;
        }
    }
}
</style>