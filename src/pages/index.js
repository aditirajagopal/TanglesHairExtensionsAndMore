import React from 'react'
import Link from 'gatsby-link'
import kellieLogo from '../images/kellie_logo.svg'

const IndexPage = () =>
  <div>
	<article className="cf ph3 ph5-ns pv5">
	  <header className="fn fl-ns w-40-ns pr4-ns sidebar">
        <h2 className="f6 fw1 ttu tracked mb2 lh-title">Est 1995</h2>
        <img className="logo" src={kellieLogo} />
	    <blockquote className="ph0 mh0 measure f4 lh-copy center">

	      <time className="f6 tracked"> 
	      	1201 S. Broadway Suite 24 Studio 1E
	      	<br/>
			Rochester MN 55904
	      	<br/>
			507-923-8614
	      </time>
	      <br/>
	      <time className="f6 ttu tracked gray"> 
	      	Monday: Closed
	      	<br/>
			Tuesday-Friday 10:00 am-2pm, 5:00 pm- 9:00 pm.
	      	<br/>
			Saturday 11:00 am- 4:00 pm.
	      </time>
	      <br/>
	      <br/>
		<a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" href="https://www.styleseat.com/m/book/p/606937">Book your next appointment today</a>
  	    </blockquote>
	  </header>
	  <div className="fn fl-ns w-60-ns content">
	  	<h1 className="f1 lh-title fw4 first ifBig">If no one is asking</h1>
	  	<h1 className="f1 lh-title fw4 second ifBig">Who does your hair?</h1>
	  	<h1 className="f-headline lh-solid third ifBig">Come See me.</h1>
		<div id="textSlider" className="row ifBig">
			<div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 slideCol">
				<div className="scroller">
					<div className="inner">
					    <blockquote className="ph0 mh0 measure f4 lh-copy center">"I love my extensions!!! They blend perfectly. I get so many compliments on how perfect they look. Kellie is awesome and knows what she is doing. They are so easy to style and take care of. I am so glad I found her!!"</blockquote>
					    <blockquote className="ph0 mh0 measure f4 lh-copy center">"Kellie is very knowledgable when it comes to styling hair. I have been so happy with my hair every time that I'll continue seeing her. Prices are very reasonable and she is flexible to get you an appointment.  I feel relaxed and welcomed when I am there."</blockquote>
					    <blockquote className="ph0 mh0 measure f4 lh-copy center">"Kellie always makes time for me and my thick, coarse, curly hair. We have spent a lot of time together while she works on my hair. She is always very professional and attentive to detail. Highly recommend!!"</blockquote>
					    <blockquote className="ph0 mh0 measure f4 lh-copy center">"Kellie did an amazing job & goes above and beyond. She was friendly, honest, and knew what she was doing! I am beyond pleased with my color and Brazilian blow out. Highly recommended."</blockquote>
					</div>
				</div>
			</div>

		</div>
		<img className="w-100 dib measure f3" src="http://mrmrs.github.io/photos/009.jpg" alt="A photo of sutro baths by Adam Morse"/>

	  	<h1 className="f1 lh-title fw4">Services</h1>
		<div className="pa4">
		  <div className="overflow-auto">
		  	<h2 className="f3 lh-title fw4">Hair Cuts</h2>
		    <table className="f6 w-100 mw8 center" cellspacing="0">
		      <tbody className="lh-copy">
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Clipper Cuts</td>
		          <td className="pv3 pr3 bb b--black-20">$25</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Scissor Cuts</td>
		          <td className="pv3 pr3 bb b--black-20">$35</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Kids Under 10</td>
		          <td className="pv3 pr3 bb b--black-20">$20</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Baby's First Haircut</td>
		          <td className="pv3 pr3 bb b--black-20">Free</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Bangs Trim</td>
		          <td className="pv3 pr3 bb b--black-20">$10</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Beard Trim</td>
		          <td className="pv3 pr3 bb b--black-20">$15</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Mustache Trim</td>
		          <td className="pv3 pr3 bb b--black-20">$10</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Beard & Mustache</td>
		          <td className="pv3 pr3 bb b--black-20">$20</td>
		        </tr>
		      </tbody>
		    </table>
		  </div>
		  <br/>
		  <div className="overflow-auto">
		  	<h2 className="f3 lh-title fw4">Styling</h2>
		    <table className="f6 w-100 mw8 center" cellspacing="0">
		      <tbody className="lh-copy">
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Shampoo & Blow dry</td>
		          <td className="pv3 pr3 bb b--black-20">$25</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Shampoo, Blow dry + Hot Iron</td>
		          <td className="pv3 pr3 bb b--black-20">$30</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Flat Iron Straightening</td>
		          <td className="pv3 pr3 bb b--black-20">$30 per hour</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Up-do</td>
		          <td className="pv3 pr3 bb b--black-20">$60</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Up-do w/ Clip In Extensions</td>
		          <td className="pv3 pr3 bb b--black-20">$90</td>
		        </tr>
		      </tbody>
		    </table>
		  </div>
		  <br/>
		  <div className="overflow-auto">
		  	<h2 className="f3 lh-title fw4">Coloring Includes Blow Dry + Longer Hair Additional</h2>
		    <table className="f6 w-100 mw8 center" cellspacing="0">
		      <tbody className="lh-copy">
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Just Roots 1 Color</td>
		          <td className="pv3 pr3 bb b--black-20">$60</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Full Head/Color Refresher</td>
		          <td className="pv3 pr3 bb b--black-20">$75</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Partial Foil (up to 20 foils)</td>
		          <td className="pv3 pr3 bb b--black-20">$50</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Full Foil (up to 50 foils)</td>
		          <td className="pv3 pr3 bb b--black-20">$80</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Babylites (up to 90 foils)</td>
		          <td className="pv3 pr3 bb b--black-20">$120</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Color w/Partial Foil</td>
		          <td className="pv3 pr3 bb b--black-20">$90</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Color w/Full Foil</td>
		          <td className="pv3 pr3 bb b--black-20">$120</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Color w/Babylites</td>
		          <td className="pv3 pr3 bb b--black-20">$160</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Partial Balayage</td>
		          <td className="pv3 pr3 bb b--black-20">$50</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Full Balayage</td>
		          <td className="pv3 pr3 bb b--black-20">$80+</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Color w/Partial Balayage</td>
		          <td className="pv3 pr3 bb b--black-20">$90</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Color w/Full Balayage</td>
		          <td className="pv3 pr3 bb b--black-20">$120+</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Ombre</td>
		          <td className="pv3 pr3 bb b--black-20">$90</td>
		        </tr>
		      </tbody>
		    </table>
		  </div>
		  <br/>
		  <div className="overflow-auto">
		  	<h2 className="f3 lh-title fw4">Keratin, Straightening, Perming Includes Blow Dry + Longer Hair Additional</h2>
		    <table className="f6 w-100 mw8 center" cellspacing="0">
		      <tbody className="lh-copy">
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Brazilian Blowout</td>
		          <td className="pv3 pr3 bb b--black-20">$160</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Below Bra Strap</td>
		          <td className="pv3 pr3 bb b--black-20">$240</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">GK Smoothing</td>
		          <td className="pv3 pr3 bb b--black-20">$160</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Below Bra Strap</td>
		          <td className="pv3 pr3 bb b--black-20">$240</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Japanese Blowout</td>
		          <td className="pv3 pr3 bb b--black-20">$280</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Below Bra Strap</td>
		          <td className="pv3 pr3 bb b--black-20">$320</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Basic Perm</td>
		          <td className="pv3 pr3 bb b--black-20">$60</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Specialty Perm</td>
		          <td className="pv3 pr3 bb b--black-20">$120+</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Straightening Perm</td>
		          <td className="pv3 pr3 bb b--black-20">$120+</td>
		        </tr>
		      </tbody>
		    </table>
		  </div>
		  <br/>
		  <div className="overflow-auto">
		  	<h2 className="f3 lh-title fw4">Extensions</h2>
		    <table className="f6 w-100 mw8 center" cellspacing="0">
		      <tbody className="lh-copy">
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Consultation</td>
		          <td className="pv3 pr3 bb b--black-20">Free</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Reset</td>
		          <td className="pv3 pr3 bb b--black-20">$160</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Remove Only</td>
		          <td className="pv3 pr3 bb b--black-20">$90</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Install Only</td>
		          <td className="pv3 pr3 bb b--black-20">$90</td>
		        </tr>
		      </tbody>
		    </table>
		  </div>
		  <br/>
		  <div className="overflow-auto">
		  	<h2 className="f3 lh-title fw4">Add Ons</h2>
		    <table className="f6 w-100 mw8 center" cellspacing="0">
		      <tbody className="lh-copy">
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Brow, Lip Or Chin Wax</td>
		          <td className="pv3 pr3 bb b--black-20">$10 each</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Full Face Wax</td>
		          <td className="pv3 pr3 bb b--black-20">$27</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">Airbrush Makeup Application</td>
		          <td className="pv3 pr3 bb b--black-20">$45</td>
		        </tr>
		      </tbody>
		    </table>
		  </div>
		</div>

	  	<h1 className="f1 lh-title fw4">About</h1>
		<article className="pa4">
			<h2>Hi I’m Kellie Smith</h2>
		    <p className="f5 lh-copy measure mt0-ns">
		      I completed my early career education from John Jay Academy in New Orleans, 
		      Louisiana.  I went on for further education in Dallas, Texas and Dublin, Ireland
		      completing various courses with Tony and Guy (TiGi) in Cutting and coloring. 
		      I had the greatest opportunity to help out back stage in Wimbley Stadium London,
		      England doing simple tasks such as tea and coffee runs, but that is where the
		      thrill and love for this industry began. I continue to broaden my craft - I am
		      an expert in hair extensions and keratin treatments, and I’m a Master Brazilian
		      Blowout technician. As I move into the Bridal arena I am able to use all of my
		      specialties including my newest endeavor, airbrush makeup.
		    </p>
		    <p className="f5 lh-copy measure">
              I've been a professional hair stylist for 22 years. I have earned a Master
              Colorist certificate from Fantastic Sams, a Masters Certification as a Brazilian
              Blowout Specialist, a certified hair extensions technician from Cinderella Hair,
              a L'Oréal Color Specialist certificate in Color Keys I and II, and an Advanced
              Cutting certificate from TIGI Academy along with securing my cosmetology license,
              my cosmetology managers license and my salon license. Over the years, I have worked
              with hair extensions, and developed my own method advancing the application of Micro
              Fusion (Cold Fusion permanent extensions). 
		    </p>
		</article>


	  	<h1 className="f1 lh-title fw4">Get in Touch</h1>
		<div className="ph3">
		  <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black addMargin" href="#0">Styleseat</a>
		  <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black addMargin" href="#0">Yelp</a>
		  <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black addMargin" href="#0">Facebook</a>
		  <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" href="#0">Instagram</a>
		</div>
	  </div>
	</article>
  </div>

export default IndexPage





    // <div class="dtc v-mid">
    //   <header class="white-70">
    //     <h2 class="f6 fw1 ttu tracked mb2 lh-title">Issue Six</h2>
    //     <h3 class="f6 fw1 lh-title">Summer MMXVI</h3>
    //   </header>
    //   <h1 class="f1 f-headline-l fw1 i white-60">The Chronicles</h1>
    //   <blockquote class="ph0 mh0 measure f4 lh-copy center">
    //     <p class="fw1 white-70">
    //       It's the space you put between the notes that make the music.
    //     </p>
    //     <cite class="f6 ttu tracked fs-normal">Massimo Vignelli</cite>
    //   </blockquote>
    // </div>