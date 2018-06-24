<template>
<div class="loading-container">
    <div class="animate">
        <div class="loading-logo"></div>
        <div class="loading-animate">
            <div id="loading-center-absolute">
                <div class="object" id="object_one"></div>
                <div class="object" id="object_two"></div>
                <div class="object" id="object_three"></div>
                <div class="object" id="object_four"></div>
                <div class="object" id="object_big"></div>
            </div>
        </div>
          
        
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style>
    .loading-container{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
				z-index: 1;
        background: linear-gradient(160deg,#ff5400 ,#ff9c00)
    }
    .animate{
        position: absolute;
        top:40%;
        left: 50%;
        width: 3.63rem;
        height: 3.63rem;
        margin-left: -1.815rem;
        margin-top: -1.815rem;
        
    }
    .loading-logo{
      
        width: 3.63rem;
        height: 3.18rem;
        
        background: url('./NICETICKET@3x.png');
        background-size: cover;

    }
    .loading-animate{
        display: flex;
        justify-content: center;
        margin-top: 1.2rem;
    }


	#loading{
		background-color: #1e1e20;
		height: 100%;
		width: 100%;
		position: fixed;
		z-index: 1;
		margin-top: 0px;
		top: 0px;
	}
	#loading-center{
		width: 100%;
		height: 100%;
		position: relative;
		}
	#loading-center-absolute {
		
		height: 150px;
		width: 150px;
		
		-ms-transform: rotate(45deg); 
	   	-webkit-transform: rotate(45deg);
	    transform: rotate(45deg); 

	}
	.object{
		width: 20px;
		height: 20px;
		background-color: #FFF;
		margin-right: 110px;
		float: left;
		margin-bottom: 110px;

		}
	.object:nth-child(2n+0) {
		margin-right: 0px;

	}
	#object_one {
		-webkit-animation: object_one 2s infinite;
		animation: object_one 2s infinite;
		}
	#object_two {
		-webkit-animation: object_two 2s infinite;
		animation: object_two 2s infinite;
		}
	#object_three {
		-webkit-animation: object_three 2s infinite;
		animation: object_three 2s infinite;
		}
	#object_four {
		-webkit-animation: object_four 2s infinite;
		animation: object_four 2s infinite;
	}
	#object_big{
		-webkit-animation: object_big 0.5s infinite;
		animation: object_big 0.5s infinite;
		position: absolute;
		width: 50px;
		height: 50px;
		left: 50px;
		top: 50px;
	}	
	@-webkit-keyframes object_big {
	  25% { -webkit-transform:  scale(0.5); }

	}

	@keyframes object_big {
	  25% { 
	    transform:  scale(0.5);
	    -webkit-transform:   scale(0.5);
	  }
	}
	@-webkit-keyframes object_one {
	  25% { -webkit-transform: translate(130px,0) rotate(-90deg) ; }
	  50% { -webkit-transform: translate(130px,130px) rotate(-180deg); }
	  75% { -webkit-transform:  translate(0,130px) rotate(-270deg) ; }
	  100% { -webkit-transform: rotate(-360deg); }
	}

	@keyframes object_one {
	  25% { 
	    transform: translate(130px,0) rotate(-90deg) ;
	    -webkit-transform: translate(130px,0) rotate(-90deg) ;
	  } 
	  50% { 
	    transform: translate(130px,130px) rotate(-180deg);
	    -webkit-transform: translate(130px,130px) rotate(-180deg);
	  } 
	  75% { 
	    transform: translate(0,130px) rotate(-270deg) ;
	    -webkit-transform: translate(0,130px) rotate(-270deg) ;
	  } 
	  100% { 
	    transform: rotate(-360deg);
	    -webkit-transform: rotate(-360deg);
	  }
	}
	@-webkit-keyframes object_two {
	  25% { -webkit-transform: translate(0,130px) rotate(-90deg) ; }
	  50% { -webkit-transform: translate(-130px,130px) rotate(-180deg); }
	  75% { -webkit-transform:  translate(-130px,0) rotate(-270deg) ; }
	  100% { -webkit-transform: rotate(-360deg); }
	}

	@keyframes object_two {
	  25% { 
	    transform: translate(0,130px) rotate(-90deg) ; 
	    -webkit-transform: translate(0,130px) rotate(-90deg) ; 
	  } 
	  50% { 
	    transform: translate(-130px,130px) rotate(-180deg);
	    -webkit-transform: translate(-130px,130px) rotate(-180deg);
	  } 
	  75% { 
	    transform: translate(-130px,0) rotate(-270deg) ;
	    -webkit-transform: translate(-130px,0) rotate(-270deg) ;
	  } 
	  100% { 
	    transform: rotate(-360deg);
	    -webkit-transform: rotate(-360deg);
	  }
	}

	@-webkit-keyframes object_three {
	  25% { -webkit-transform: translate(0,-130px)  rotate(-90deg) ; }
	  50% { -webkit-transform: translate(130px,-130px) rotate(-180deg); }
	  75% { -webkit-transform:  translate(130px,0) rotate(-270deg) ; }
	  100% { -webkit-transform: rotate(-360deg); }
	}

	@keyframes object_three {
	  25% { 
	    transform: translate(0,-130px)  rotate(-90deg) ;
	    -webkit-transform: translate(0,-130px)  rotate(-90deg) ;
	  } 
	  50% { 
	    transform: translate(130px,-130px) rotate(-180deg);
	    -webkit-transform: translate(130px,-130px) rotate(-180deg);
	  } 
	  75% { 
	    transform:  translate(130px,0) rotate(-270deg) ;
	    -webkit-transform: translate(130px,0) rotate(-270deg) ;
	  } 
	  100% { 
	    transform: rotate(-360deg);
	    -webkit-transform: rotate(-360deg);
	  }
	}


	@-webkit-keyframes object_four {
	  25% { -webkit-transform: translate(-130px,0)  rotate(-90deg) ; }
	  50% { -webkit-transform: translate(-130px,-130px) rotate(-180deg); }
	  75% { -webkit-transform:  translate(0,-130px) rotate(-270deg) ; }
	  100% { -webkit-transform: rotate(-360deg); }
	}

	@keyframes object_four {
	  25% { 
	    transform: translate(-130px,0)  rotate(-90deg) ; 
	    -webkit-transform: translate(-130px,0)  rotate(-90deg) ; 
	  } 
	  50% { 
	    transform: translate(-130px,-130px) rotate(-180deg);
	    -webkit-transform: translate(-130px,-130px) rotate(-180deg);
	  } 
	  75% { 
	    transform: translate(0,-130px) rotate(-270deg) ;
	    -webkit-transform: translate(0,-130px) rotate(-270deg) ;
	  } 
	  100% { 
	    transform: rotate(-360deg);
	    -webkit-transform: rotate(-360deg);
	  }
	}
	
</style>


