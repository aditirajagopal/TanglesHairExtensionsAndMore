import React from 'react'
import Link from 'gatsby-link'
import kellieLogo from '../images/kellie_logo.svg'
import kellieHeader from '../images/kellie_grid.png'
import kelliePhoto from '../images/kellie.png'

const IndexPage = () =>
  <div>
	<article className="cf ph3 ph5-ns pv5">
	  <header className="fn fl-ns w-40-ns pr4-ns sidebar">
        <h2 className="f6 fw1 ttu tracked mb2 lh-title gold">Est 1995</h2>
        <img className="logo" src={kellieLogo} />
	    <blockquote className="ph0 mh0 measure f4 lh-copy center white">

	      <time className="f6 tracked"> 
			1201 S. Broadway Suite 24 Studio #1 <br/>
			Rochester MN 55904 <br/>
			507-923-8614
	      </time>
	      <br/>
	      <time className="f6 ttu tracked white"> 
	      	Monday: Closed
	      	<br/>
			Tuesday-Friday 10:00 am-2pm, 5:00 pm- 9:00 pm.
	      	<br/>
			Saturday 11:00 am- 4:00 pm.
	      </time>
	      <br/>
	      <br/>
		<a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-maize" href="https://tangleskelliesmith.glossgenius.com/">Book your next appointment today</a>
  	    </blockquote>
	  </header>
	  <div className="fn fl-ns w-60-ns content">
	  	<h1 className="f1 lh-title fw4 saffron-mango ifBig">If no one is asking</h1>
	  	<h1 className="f1 lh-title fw4 saffron-mango ifBig">Who does your hair?</h1>
	  	<h1 className="f-headline lh-solid maize ifBig">Come See me.</h1>
		<div id="textSlider" className="row ifBig">
			<div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 slideCol">
				<div className="scroller">
					<div className="inner">
					    <blockquote className="ph0 mh0 measure f4 lh-copy center apricot-white">"I love my extensions!!! They blend perfectly. I get so many compliments on how perfect they look. Kellie is awesome and knows what she is doing. They are so easy to style and take care of. I am so glad I found her!!"</blockquote>
					    <blockquote className="ph0 mh0 measure f4 lh-copy center white">"Kellie is very knowledgable when it comes to styling hair. I have been so happy with my hair every time that I'll continue seeing her. Prices are very reasonable and she is flexible to get you an appointment.  I feel relaxed and welcomed when I am there."</blockquote>
					    <blockquote className="ph0 mh0 measure f4 lh-copy center apricot-white">"Kellie always makes time for me and my thick, coarse, curly hair. We have spent a lot of time together while she works on my hair. She is always very professional and attentive to detail. Highly recommend!!"</blockquote>
					    <blockquote className="ph0 mh0 measure f4 lh-copy center white">"Kellie did an amazing job & goes above and beyond. She was friendly, honest, and knew what she was doing! I am beyond pleased with my color and Brazilian blow out. Highly recommended."</blockquote>
					</div>
				</div>
			</div>

		</div>

	  	<h1 className="f1 lh-title fw4 saffron-mango">Services</h1>
		<div className="pa4">
		  <div className="overflow-auto">
		  	<h2 className="f3 lh-title fw4 maize">Cutting & Styling</h2>
		    <table className="f6 w-100 mw8 center" cellspacing="0">
		      <tbody className="lh-copy">
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Bangs Trim</td>
		          <td className="pv3 pr3 b--maize white">$15for 15 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Haircut with Chemical Service</td>
		          <td className="pv3 pr3 b--maize white">$25 and up for 45 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Kids Cut (Under 10)</td>
		          <td className="pv3 pr3 b--maize white">$25 for 30 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Baby's First Haircut</td>
		          <td className="pv3 pr3 b--maize white">Free</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Clipper Cuts</td>
		          <td className="pv3 pr3 b--maize white">$30 for 30 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Scissor Cuts</td>
		          <td className="pv3 pr3 b--maize white">$40 for 60 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Deep Conditioning Treatment</td>
		          <td className="pv3 pr3 b--maize white">$70 for 90 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Shampoo & Blow dry</td>
		          <td className="pv3 pr3 b--maize white">$30 for 30 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Shampoo, Blow dry + Hot Iron</td>
		          <td className="pv3 pr3 b--maize white">$55 for 60 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Flat Iron Straightening</td>
		          <td className="pv3 pr3 b--maize white">$30 per hour</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Up-do</td>
		          <td className="pv3 pr3 b--maize white">$70 and up for 60 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Up-do w/ Clip In Extensions</td>
		          <td className="pv3 pr3 b--maize white">$90 and up for 120 minutes
		          <br/>
       		  	  <small className="saffron-mango">Additional hair pieces can be added for extra volume and or length</small>
		          </td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Beard Trim</td>
		          <td className="pv3 pr3 b--maize white">$20 for 15 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Mustache Trim</td>
		          <td className="pv3 pr3 b--maize white">$13 for 15 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Beard & Mustache</td>
		          <td className="pv3 pr3 b--maize white">$30 for 30 minutes</td>
		        </tr>
		      </tbody>
		    </table>
		  </div>
		  <br/>
		  <div className="overflow-auto">
		  	<h2 className="f3 lh-title fw4 maize">Coloring</h2>
		  	<small className="saffron-mango">(Includes Blow Dry + Longer Hair Additional)</small>
		    <table className="f6 w-100 mw8 center" cellspacing="0">
		      <tbody className="lh-copy">
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Just Roots</td>
		          <td className="pv3 pr3 b--maize white">$65 for 90 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Full Head/Refresh Color</td>
		          <td className="pv3 pr3 b--maize white">$80 for 90 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Partial Foil (up to 20 foils)</td>
		          <td className="pv3 pr3 b--maize white">$65 for 90 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Full Foil (up to 50 foils)</td>
		          <td className="pv3 pr3 b--maize white">$85 for 120 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Babylites (up to 90 foils)</td>
		          <td className="pv3 pr3 b--maize white">$150 for 210 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Color w/Partial Foil</td>
		          <td className="pv3 pr3 b--maize white">$95 for 180 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Color w/Full Head Foil</td>
		          <td className="pv3 pr3 b--maize white">$130 for 180 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Color w/Babylites</td>
		          <td className="pv3 pr3 b--maize white">$170 and up for 240 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Partial Balayage</td>
		          <td className="pv3 pr3 b--maize white">$65 for 150 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Full Head Balayage</td>
		          <td className="pv3 pr3 b--maize white">$85 for 150 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Color w/Partial Balayage</td>
		          <td className="pv3 pr3 b--maize white">$95 for 180 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Color w/Full Head Balayage</td>
		          <td className="pv3 pr3 b--maize white">$130 for 180 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Ombre</td>
		          <td className="pv3 pr3 b--maize white">$130 and up for 180 minutes</td>
		        </tr>
		      </tbody>
		    </table>
		  </div>
		  <br/>
		  <div className="overflow-auto">
		  	<h2 className="f3 lh-title fw4 maize">Keratin, Straightening, & Perming</h2>
		  	<small className="saffron-mango">(Includes Blow Dry + Longer Hair Additional)</small>
		    <table className="f6 w-100 mw8 center" cellspacing="0">
		      <tbody className="lh-copy">
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Brazilian Blowout</td>
		          <td className="pv3 pr3 b--maize white">$160 and up for 180 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Japanese Blowout</td>
		          <td className="pv3 pr3 b--maize white">$225 and upfor 210 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Below Bra Strap</td>
		          <td className="pv3 pr3 b--maize white">$320</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Basic Perm</td>
		          <td className="pv3 pr3 b--maize white">$75 for 90 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Specialty Perm</td>
		          <td className="pv3 pr3 b--maize white">$140 and up for 180 minutes</td>
		        </tr>
		      </tbody>
		    </table>
		  </div>
		  <br/>
		  <div className="overflow-auto">
		  	<h2 className="f3 lh-title fw4 maize">Hair Extensions</h2>
		    <table className="f6 w-100 mw8 center" cellspacing="0">
		      <tbody className="lh-copy">
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Consultation</td>
		          <td className="pv3 pr3 b--maize white">Free</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Fusion Hair Extensions</td>
		          <td className="pv3 pr3 b--maize white">
		          	$350 and up for 180 minutes
		          	<br/>
     		  	  	<small className="saffron-mango">Consultation is free. Individual strands of hair are attached with micro bead fitting to extend length and add volume to natural hair.</small>
		          </td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Extensions Install Only</td>
		          <td className="pv3 pr3 b--maize white">$100 and up for 180 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Extensions Install Unknown Brand</td>
		          <td className="pv3 pr3 b--maize white">$180 and up for 180 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Extensions Reset</td>
		          <td className="pv3 pr3 b--maize white">
		          	$160 for 300 minutes
		          	<br/>
	       		  	<small className="saffron-mango">When 1 inch of new growth has been reached fusion hair extensions are removed. The natural hair is freed of all matting and tangling and is prepped for hair replacement.</small>
		          </td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Extensions Reset Unknown brand</td>
		          <td className="pv3 pr3 b--maize white">$250 for 300 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Remove Only</td>
		          <td className="pv3 pr3 b--maize white">$100 for 120 minutes</td>
		        </tr>
		      </tbody>
		    </table>
		  </div>
		  <br/>
		  <div className="overflow-auto">
		  	<h2 className="f3 lh-title fw4 maize">Additionals</h2>
		    <table className="f6 w-100 mw8 center" cellspacing="0">
		      <tbody className="lh-copy">
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Brow, Lip Or Chin Wax</td>
		          <td className="pv3 pr3 b--maize white">$13 for 15 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Full Face Wax</td>
		          <td className="pv3 pr3 b--maize white">$30 for 30 minutes</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 b--maize apricot-white">Olaplex Repair Treatment</td>
		          <td className="pv3 pr3 b--maize white">
		          	$90 for 45 minutes
		          	<br/>
	       		  	<small className="saffron-mango">Service includes a 2 month supply of Olaplex #3 take home treatment</small>
		          </td>
		        </tr>
		      </tbody>
		    </table>
		  </div>
		</div>

	  	<h1 className="f1 lh-title fw4 maize">About</h1>
		<article className="pa4">
		<header className="tc">
  		  <img src={kelliePhoto} className="br-100 pa1 ba b--black-10 h5 w5" alt="avatar" />
		  <h1 className="f5 f4-ns fw6 gray">Hi I’m Kellie Smith</h1>
		</header>
		    <p className="f5 lh-copy measure mt0-ns apricot-white">
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
		    <p className="f5 lh-copy measure apricot-white">
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


	  	<h1 className="f1 lh-title fw4 saffron-mango">Get in Touch</h1>
		<div className="ph3">
		  <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-maize addMargin" href="https://tangleskelliesmith.glossgenius.com/">Sola Genius</a>
		  <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-maize addMargin" href="https://www.solasalonstudios.com/salon-professional/kellie-smith-1">Sola Salons Website</a>
		  <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-maize addMargin" href="https://www.yelp.com/biz/tangles-hair-extensions-and-more-rochester">Yelp</a>
		  <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-maize addMargin" href="https://www.facebook.com/Tangles-Hair-Extensions-and-More-238806386155182/">Facebook</a>
		</div>
	  </div>
	</article>
  </div>

export default IndexPage