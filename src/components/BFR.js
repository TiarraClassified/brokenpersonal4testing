import React, {Component} from 'react';
import video from '../photos/Diagrams/marsSimulation.mp4';
import styles from '../parallaxtesting/styles';
import './BFR.css';
import {Link} from 'react-router-dom';
import earthMars from '../photos/earthMarstrans.png';
import BFRBoston from '../photos/Diagrams/bfrBoston.png';
import RocketCap from '../photos/Diagrams/capabilities.png';
import FuelComparison from '../photos/Diagrams/FuelComparison.png';
import Costs from '../photos/Diagrams/costs.png';
import SystArch from '../photos/Diagrams/SystemArchitecture.jpg';
 
export default class BFR extends Component{
    constructor(){
        super()

        this.state={
            transition: false,
            color: false
        }
    }

    componentWillMount(){
        window.scrollTo(0, 0);
    }

    componentDidMount(){
        setTimeout(()=>{
        this.setState({
            transition: true
        })},2)

        setTimeout(()=>{
            this.setState({
                color: true
        })},700)
    }

    render(){
        return(
            <section className='BFR' style={this.state.color ? {color: '#DECAAF', transition: "1s"} : this.state.transition ? {width: "100vw", transition: '1s'} : {width: '0', color: 'black'}}>
                <div className='boutThatRocket'>
                <Link to='/mars'><div className='breadcrumb'><img src={earthMars}/><span id=
                'breadcrumbtext'>Go to Home</span></div></Link>
                <p>It's All About That Rocket</p></div>
                <video autoPlay loop muted style={styles.video}>
                    <source src={video} type="video/mp4" />
                </video>
            <div className='intro'><p>This is an introduction to the amazing BFR. I haven't decided what I'm going to write here yet, so I'm just going to keep talking. But this rocket is amazing, and I'm in love with it. But how about some Bob Ross Ipsum to fill up the space. 
            What the devil. There's not a thing in the world wrong with washing your brush. I guess that would be considered a UFO. A big cotton ball in the sky. Do an almighty painting with us. It's cold, but it's beautiful. The only prerequisite is that it makes you happy. If it makes you happy then it's good.

            Let's build some happy little clouds up here. This is a happy place, little squirrels live here and play. That is when you can experience true joy, when you have no fear. The least little bit can do so much.

            Put it in, leave it alone. That's why I paint - because I can create the kind of world I want - and I can make this world as happy as I want it. I'm a water fanatic. I love water. You've got to learn to fight the temptation to resist these things. Just let them happen. For the lack of a better word I call them hangy downs. As trees get older they lose their chlorophyll.</p></div>

            <div className='soup'>
                <div className='image-footer'>
                    <img src={BFRBoston}/>
                    <p>BFR rocket scaled next to Big Ben.</p>
                </div>
                <p>We don't make mistakes we just have happy little accidents. We'll take a little bit of Van Dyke Brown. You better get your coat out, this is going to be a cold painting. Think about a cloud. Just float around and be there. I will take some magic white, and a little bit of Vandyke brown and a little touch of yellow. A beautiful little sunset.

                Van Dyke Brown is a very nice brown, it's almost like a chocolate brown. We'll put some happy little leaves here and there. This is gonna be a happy little seascape. Almost everything is going to happen for you automatically - you don't have to spend any time A tree needs to be your friend if you're going to paint him. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. And I know you're saying, 'Oh Bob, you've done it this time.' And you may be right. It's almost like something out of a fairytale book.

                Let that brush dance around there and play. Let's have a happy little tree in here. Here's something that's fun. Don't be afraid to make these big decisions. Once you start, they sort of just make themselves. If what you're doing doesn't make you happy - you're doing the wrong thing.

                If we're gonna walk though the woods, we need a little path. Decide where your cloud lives. Maybe he lives right in here. We don't need any guidelines or formats. All we need to do is just let it flow right out of us.</p>
            </div>

            <div className='soup'>
                <p>Lorem ipsum dolor amet craft beer kombucha scenester ramps pabst street art before they sold out food truck. Roof party biodiesel butcher paleo palo santo. Narwhal you probably haven't heard of them raclette, chillwave shoreditch enamel pin bicycle rights brooklyn vexillologist tousled photo booth distillery bushwick affogato. 3 wolf moon brunch shaman, cred disrupt glossier pour-over microdosing raclette air plant chillwave fixie.

                Pinterest tilde vice leggings, small batch messenger bag food truck cliche authentic stumptown bespoke deep v. Mustache messenger bag venmo, vegan banh mi kickstarter cronut freegan activated charcoal dreamcatcher synth succulents aesthetic lomo hoodie. Hella marfa normcore kinfolk waistcoat. Etsy gentrify kinfolk, shaman lomo banjo cronut vape bitters ennui hashtag occupy la croix kitsch bicycle rights.

                Yuccie ethical af, cray whatever marfa pour-over kale chips banh mi iceland waistcoat four dollar toast air plant stumptown. Chartreuse etsy tousled, chillwave tacos waistcoat twee enamel pin bitters kitsch direct trade asymmetrical shoreditch chicharrones. Literally flannel artisan heirloom gochujang poke. Butcher organic ramps, XOXO deep v kitsch neutra etsy everyday carry 3 wolf moon squid mixtape chartreuse intelligentsia.</p>
                <div className='image-footer'>
                    <img src={RocketCap} style={{marginTop:"0"}} alt="rocket capabilities"/>
                    <p>Payload capabilities by rocket.</p>
                </div>
            </div>

            <div className='soup'>
                <div className='image-footer' style={{maxWidth: "50%"}}>
                        <img src={FuelComparison}  alt="fuel comparison"/>
                        <p>Fuel comparison</p>
                </div>
                <p>
                YOLO echo park quinoa lomo occupy copper mug authentic keytar kinfolk yr slow-carb semiotics tote bag intelligentsia. Migas meh flannel mlkshk lyft, food truck cardigan plaid master cleanse. Fanny pack austin mixtape butcher. Flexitarian hot chicken tacos locavore sriracha retro. Pabst shabby chic occupy, raw denim man bun la croix snackwave poke pitchfork echo park hoodie cliche. Wolf stumptown actually marfa meditation.

                Ramps art party mixtape, ennui tofu try-hard meditation. Ramps pickled small batch vaporware readymade, farm-to-table lomo tousled cloud bread DIY raclette cronut fam forage typewriter. Artisan prism meggings, cornhole slow-carb wolf master cleanse iPhone kale chips marfa pop-up mustache williamsburg shabby chic affogato. Knausgaard paleo put a bird on it hexagon, drinking vinegar jean shorts artisan chambray salvia cray organic biodiesel. Chicharrones slow-carb hashtag mixtape. VHS dreamcatcher man bun direct trade vice activated charcoal.
                </p>
            </div>

            <div className='fullWidth'>
                <div className='image-footer' style={{minWidth:"100%", maxHeight: "60%"}}>
                    <img src={Costs} alt="costs"/>
                    <p style={{fontSize: "14px", textAlign: "right", marginRight: '40px'}}>Estimated rocket costs.</p>
                </div><br/>
                <p>Pommy ipsum up the duff complete mare doolally bread and butter pudding Moriarty the fuzz, yorkshire mixture naff baffled copped a bollocking because there was nothing on the gogglebox her Majesty's pleasure, man and his whippet that's ace one would like alright duck brilliant grab a jumper. Victoria sponge cake Kate and Will red telephone box nicked Prince Charles yorkshire mixture chinwag collywobbles plum pudding utter shambles, gob penny-dreadful big light oopsy-daisies brown sauce clotted cream bread and butter pudding absolute. Bugger pants 10 pence mix tally-ho jammy git, had a barney with the inlaws a right toff bog roll pie-eyed collywobbles, throw a paddy red telephone box challenge you to a duel.

                Give you a bell got a lot of brass narky picalilly cor blimey' fish and chips it's the bees knees flabbergasted bog roll, Amelia Pond a tenner spend a penny chips stiff upper lip tosser absolute, up North jolly could be a bit of a git lost her marbles how's your father jammy git proper. Daft cow rumpy pumpy the old bill odds and sods bull dog round our gaff tosser, up North and down South pulled a right corker gosh. A bit miffed absolute twoddle wibbly-wobbly timey-wimey stuff complete mare a tenner Bad Wolf Southeners grab a jumper, off t'shop collywobbles old chap the chippy twiglets.</p></div><br/>
            <div className='fullWidth'>
                <div className='image-footer'>
                    <img src={SystArch} alt='system architecture'/>
                    <p style={{fontSize: "14px", textAlign: "right", marginRight: '40px'}}>System architecture</p>
                </div><br/>
                <p>Snotty nosed brat Moriarty it's cracking flags on the beat numbskull red telephone box god save the queen, wibbly-wobbly timey-wimey stuff Dalek chav a week on Sunday knee high to a grasshopper i'll be a monkey's uncle, absolute twoddle had a barney with the inlaws skive old chap collywobbles. A reet bobbydazzler pillock atrocious nigh marmite bossy britches, god save the queen absolute twoddle could be a bit of a git jellied eels bit of alright, is she 'avin a laugh copper The Hounds of Baskerville nose rag. Spend a penny mince pies barmy in a pickle gutted fake tan Geordie, morris dancers jolly good lad nowt absolute twoddle ey up chuck alright geezer, scrubber bent as a nine bob note stupendous Northeners god save the queen.

                Down South The Hounds of Baskerville naff off meat and two veg don't get your knickers in a twist tip-top cottage pie scones copped a bollocking, driving a mini round our gaff meat and two veg bit of a div leisurely collywobbles pork dripping. God save the queen scally bag egg's old boy completely starkers sling one's hook on the pull guinness narky it's nicked guinness, utter shambles a right royal knees up sweets naff bread and butter pudding nuthouse bull dog. Farewell scatterbrained one would be honoured to cobbles man and his whippet trouble and strife round our gaff pikey, off t'pub jolly hockey sticks by 'eck love chin up off the hook and we all like figgy pudding working class one off, driving a mini twiglets I'm off to Bedfordshire Prince Charles you mean it ain't me noggin' eton mess.

                Ask your mother if barmy bloody mary shortbread baffled toad in the whole squirrel curtain twitching, devonshire cream tea had a barney with the inlaws down South River Song bugger beefeater crumpets, the black death because there was nothing on the gogglebox on't goggle box upper class owt spend a penny. Macca gutted supper Dalek The Doctor, I could reet fancy a nigh. Therewith manky fake tan and we all like figgy pudding, a comely wench ey up duck. On a stag do Bob's your uncle chap posh nosh don't get your knickers in a twist, chap grab a jumper on a stag do, chinwag queer as a clockwork orange flog.</p>
                
            </div>

            </section>
        )
    }
}