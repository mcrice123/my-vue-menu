<template>
    <div id="app">
        <Menu 
            title="My Vue Menu"
            subtitle="A menu project built with VueJS"
            :topLinks="topLinks"
            :bottomLinks="bottomLinks"
        />
        <div id="content" class="segment">
            <div class="container">
                <h1 class="title is-size-2">Hello!</h1>
                <p>
                    Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship.
                </p>
                <SlideShow
                    :images="images"
                ></SlideShow>
                <p>
                    Depart do be so he enough talent. Sociable formerly six but handsome. Up do view time they shot. He concluded disposing provision by questions as situation. Its estimating are motionless day sentiments end. Calling an imagine at forbade. At name no an what like spot. Pressed my by do affixed he studied.
                </p>
                <p>
                    Arrived totally in as between private. Favour of so as on pretty though elinor direct. Reasonable estimating be alteration we themselves entreaties me of reasonably. Direct wished so be expect polite valley. Whose asked stand it sense no spoil to. Prudent you too his conduct feeling limited and. Side he lose paid as hope so face upon be. Goodness did suitable learning put.
                </p> 
                <h2 class="title is-size-3">The Turtles</h2>
                <p>
                    Consulted perpetual of pronounce me delivered. Too months nay end change relied who beauty wishes matter. Shew of john real park so rest we on. Ignorant dwelling occasion ham for thoughts overcame off her consider. Polite it elinor is depend. His not get talked effect worthy barton. Household shameless incommode at no objection behaviour. Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth. Certain law age brother sending amongst why covered. 
                </p>
                <p>
                    Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight. Sang lose of hour then he left find. 
                </p>
                <h2 class="title is-size-3">Washing Laundry</h2>
                <p>
                    Sing long her way size. Waited end mutual missed myself the little sister one. So in pointed or chicken cheered neither spirits invited. Marianne and him laughter civility formerly handsome exit use prospect. Hence we doors is given rapid scale above am. Difficult ye mr delivered behaviour by an. If their woman could do wound on. You folly taste hoped their above are and but. 
                </p>
                <p>
                    Certainty determine at of arranging perceived situation or. Or wholly pretty county in oppose. Favour met itself wanted settle put garret twenty. In astonished apartments resolution so an it. Unsatiable on by contrasted to reasonable companions an. On otherwise no admitting to suspicion furniture it. 
                </p>

            </div>
        </div>
    </div>
</template>

<script>
    import Menu from './components/Menu.vue';
    import SlideShow from './components/SlideShow.vue';
    import 'bulma';

    export default {
        name: 'App',
        components: {
          Menu,
          SlideShow
        },
        data() {
            return {
                topLinks: [
                    {
                        text: 'Home',
                        url: '',
                        isActive: true,
                        class: ''
                    },
                    {
                        text: 'Examples',
                        isActive: false,
                        class: ''
                    },
                    {
                        text: 'Documentation',
                        url: 'https://github.com/mcrice123/my-vue-menu',
                        isActive: false,
                        target: '_blank',
                        class: 'button is-info is-inverted'
                    }
                ],
                bottomLinks: [
                    {
                        text: 'Overview',
                        isActive: true,
                        url: '#'
                    },
                    {
                        text: 'Modifiers',
                        isActive: false
                    },
                    { 
                        text: 'Grid',
                        isActive: false
                    },
                    {
                        text: 'Elements',
                        isActive: false
                    },
                    {
                        text: 'Components',
                        isActive: false,
                    },
                    {
                        text: 'Layout',
                        isActive: false,
                    },
                ],
                images: [
                    {
                        url: 'http://localhost:8080/kiki-flying.png',
                        alt: "Kiki"
                    },
                    {
                        url: 'http://localhost:8080/porco-plane.png',
                        alt: "Porco's plane"
                    },
                    {
                        url: 'http://localhost:8080/castle-in-the-sky.png',
                        alt: "Castle in the Sky"
                    },
                    {
                        url: 'http://localhost:8080/nausicaa.jpg',
                        alt: "Nausicaa"
                    }
                ]
            };
        }
    }
</script>

<style>
    #app {
        margin-bottom: 40px;
    }
    #content {
        min-height: 200px;
    }
    .ocean-bg {
        background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url('/ocean.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }
    #content > .container {
        margin: 0 10px;
    }
    #content > .container > h2 {
        margin-top: 30px;
    }
    #content > .container > p {
        margin-bottom: 10px;
    }
</style>
