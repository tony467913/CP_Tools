var modeButtons = document.querySelectorAll(".mode");

var pw_result = document.getElementById('PW_result');
var sh_result = document.getElementById('SH_result');
var xo_result = document.getElementById('XO_result');
var eqxox_result = document.getElementById('EQXOX_result');
var uneqxox_result = document.getElementById('UNEQXOX_result');
var pw_note = document.getElementById('PW_note');
var xo_note = document.getElementById('XO_note');
var sh_note = document.getElementById('SH_note');
var eqxox_note = document.getElementById('EQXOX_note');
var uneqxox_note = document.getElementById('UNEQXOX_note');
var _2PD_note = document.getElementById('2PD_note');
var _3PD_note = document.getElementById('3PD_note');
var _4PD_note = document.getElementById('4PD_note');
var _2PD_result = document.getElementById('2PD_result');
var _3PD_result = document.getElementById('3PD_result');
var _4PD_result = document.getElementById('4PD_result');
var ca_result = document.getElementById('CA_result');
var aw_result = document.getElementById('AW_result');
var ca_note = document.getElementById('CA_note');
var aw_note = document.getElementById('AW_note');
var dh_result = document.getElementById('DH_result');
var dh_note = document.getElementById('DH_note');
var dsl_result = document.getElementById('DSL_result');
var dsl_note = document.getElementById('DSL_note');
var sd_result = document.getElementById('SD_result');
var sd_note = document.getElementById('SD_note');
var dsd_result = document.getElementById('DSD_result');
var dsd_note = document.getElementById('DSD_note');




init();

function init(){
  setupModeButtons();
  reset();
}


function setupModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
     // modeButtons[2].classList.remove("selected");
      this.classList.add("selected");
      // this.textContent === "Vista" ? 
      if (this.textContent=="Vista") {
        document.getElementById("customers").style.display = "table";
        document.getElementById("shapes").style.display = "none";
        document.getElementById('PW_btn').onclick = function() {getPW_Result();}
        document.getElementById('SH_btn').onclick = function() {getSH_Result();}
        document.getElementById('XO_btn').onclick = function() {getXO_Result();}
        document.getElementById('EQXOX_btn').onclick = function() {getEQXOX_Result();}
        document.getElementById('UNEQXOX_btn').onclick = function() {getUNEQXOX_Result();}
        document.getElementById("hide2pd").style.display = "table-row";
        document.getElementById("hide3pd").style.display = "table-row";
        document.getElementById("hide4pd").style.display = "table-row";
        document.getElementById("hideAW").style.display = "none";
        document.getElementById("hideCA").style.display = "none";
        document.getElementById("hideDH").style.display = "none";  
        document.getElementById("hideDSL").style.display = "none"; 
        document.getElementById("hideSD").style.display = "none";   
        document.getElementById("hideDSD").style.display = "none"; 
        document.getElementById("hideTT").style.display = "none"; 

        document.getElementById("hidePW").style.display = "table-row";
        document.getElementById("hideSH").style.display = "table-row";
        document.getElementById("hideXO").style.display = "table-row";
        document.getElementById("hideEQXOX").style.display = "table-row";
        document.getElementById("hideUNEQXOX").style.display = "table-row";

      } else {
        if (this.textContent=="Vista Plus") {
        document.getElementById("customers").style.display = "table";
        document.getElementById("shapes").style.display = "none";
        document.getElementById('PW_btn').onclick = function() {getVP_PW_Result();}
        document.getElementById('SH_btn').onclick = function() {getVP_SH_Result();}
        document.getElementById('XO_btn').onclick = function() {getVP_XO_Result();}
        document.getElementById('EQXOX_btn').onclick = function() {getVP_EQXOX_Result();}
        document.getElementById('UNEQXOX_btn').onclick = function() {getVP_UNEQXOX_Result();}
        document.getElementById("hide2pd").style.display = "none";
        document.getElementById("hide3pd").style.display = "none";
        document.getElementById("hide4pd").style.display = "none";
        document.getElementById("hideAW").style.display = "table-row";
        document.getElementById("hideCA").style.display = "table-row";
        document.getElementById("hideDH").style.display = "none";  
        document.getElementById("hideDSL").style.display = "none";  
        document.getElementById("hideSD").style.display = "none";   
        document.getElementById("hideDSD").style.display = "none";  
        document.getElementById("hideTT").style.display = "none";  
        document.getElementById("hidePW").style.display = "table-row";
        document.getElementById("hideSH").style.display = "table-row";
        document.getElementById("hideXO").style.display = "table-row";
        document.getElementById("hideEQXOX").style.display = "table-row";
        document.getElementById("hideUNEQXOX").style.display = "table-row";
        } else {
          if (this.textContent=="Combos & Shapes") {
        document.getElementById("customers").style.display = "none";
        document.getElementById("shapes").style.display = "table";

          } else {
        document.getElementById("customers").style.display = "table";
        document.getElementById("shapes").style.display = "none";
        document.getElementById('PW_btn').onclick = function() {getVal_PW_Result();}
        document.getElementById('SH_btn').onclick = function() {getVal_SH_Result();}
        document.getElementById('XO_btn').onclick = function() {getVal_XO_Result();}
        document.getElementById('EQXOX_btn').onclick = function() {getVal_EQXOX_Result();}
        document.getElementById('UNEQXOX_btn').onclick = function() {getVal_UNEQXOX_Result();}
        document.getElementById("hide2pd").style.display = "none";
        document.getElementById("hide3pd").style.display = "none";
        document.getElementById("hide4pd").style.display = "none";
        document.getElementById("hideAW").style.display = "none";
        document.getElementById("hideCA").style.display = "none"; 
        document.getElementById("hideSD").style.display = "table-row";   
        document.getElementById("hideDSD").style.display = "table-row";  
        document.getElementById("hideDH").style.display = "table-row";  
        document.getElementById("hideDSL").style.display = "table-row";  
        document.getElementById("hideTT").style.display = "none";  
          }
        }
      }
      reset();
    });
  }
}


function getPW_Result(){
	var result = document.getElementById('PW_result');
	var width = document.getElementById('PW_w').value;
	var height = document.getElementById('PW_h').value;
  var note = document.getElementById('PW_note')
  if (12<=width && width<=72 && 12<=height && height<=72) {
  	 result.innerHTML="PASS";
      if (width*height/144<=15) {
        note.innerHTML="Gold Label & 1/8 glass";
      }
      else{
        note.innerHTML="Gold Label & 3/16 glass";
      }
      
	} 
	else {
  		if (7<=width && width<=100 && 7<=height && 
  			height<=100 && width*height/144<=40) {
        result.innerHTML="PASS";
        if (7<=width && width<=80 && 7<=height && 
        height<=80 && width*height/144<=20) {
          note.innerHTML="No Gold Label & 1/8 glass";        
      }
        else{
          if (width*height/144<=33 && width<=96 && height<=96){
            note.innerHTML="No Gold Label & 3/16 glass";
          }
          else{
            note.innerHTML="No Gold Label & 3/16 Tempered glass";
          }
        }       
    }       
  		else {
  			result.innerHTML="FAIL";
        note.innerHTML="";
  	}}
}

function getVP_PW_Result(){
  var result = document.getElementById('PW_result');
  var width = document.getElementById('PW_w').value;
  var height = document.getElementById('PW_h').value;
  var note = document.getElementById('PW_note')
  if (15.5<=width && width<=72 && 15.5<=height && height<=72) {
     result.innerHTML="PASS";
      if (width*height/144<=15) {
        note.innerHTML="Gold Label & 1/8 glass";
      }
      else{
        note.innerHTML="Gold Label & 3/16 glass";
      }
      
  } 
  else {
    if (15.5<=width && width<=140 && 15.5<=height && height<=140 && width*height/144<=40) {
      result.innerHTML="PASS";
      if (width*height/144<=15 && 80>=width && 80>=height) {
        note.innerHTML="No Gold Label & 1/8 glass";
      } else {
        if (width*height/144<=33 && 96>=width && 96>=height) {
          note.innerHTML="No Gold Label & 3/16 glass";
        } else {
          if (width*height/144<=45 && 96>=width && 96>=height) {
            note.innerHTML="No Gold Label & 1/4 glass";
          } else{
            if (width*height/144<=50 && 100>=width && 100>=height) {
              note.innerHTML="No Gold Label & 3/16 TEMP";
            } else {
              note.innerHTML="No Gold Label & 1/4 TEMP";
            }
          }
        }
      }
    } else {
      result.innerHTML="FAIL";
      note.innerHTML=""; 
    }
  }
}

function getVal_PW_Result(){
  var result = document.getElementById('PW_result');
  var width = document.getElementById('PW_w').value;
  var height = document.getElementById('PW_h').value;
  var note = document.getElementById('PW_note')
  if (12<=width && width<=72 && 12<=height && height<=72) {
     result.innerHTML="PASS";
      if (width*height/144<=15) {
        note.innerHTML="Gold Label & 1/8 glass";
      }
      else{
        note.innerHTML="Gold Label & 3/16 glass";
      }
      
  } 
  else {
    if (12<=width && width<=140 && 12<=height && height<=140 && width*height/144<=60) {
      result.innerHTML="PASS";
      if (width*height/144<=15 && 80>=width && 80>=height) {
        note.innerHTML="No Gold Label & 1/8 glass";
      } else {
        if (width*height/144<=33 && 100>=width && 100>=height) {
          note.innerHTML="No Gold Label & 3/16 glass";
        } else {
          if (width*height/144<=50 && 100>=width && 100>=height) {
            note.innerHTML="No Gold Label & 3/16 TEMP";
          } else{
            if (width*height/144<=45 && 120>=width && 120>=height) {
              note.innerHTML="No Gold Label & 1/4 TEMP";
            } else {
              note.innerHTML="No Gold Label & 1/4 TEMP";
            }
          }
        }
      }
    } else {
      result.innerHTML="FAIL";
      note.innerHTML=""; 
    }
  }
}


function getXO_Result(){
	var result = document.getElementById('XO_result');
	var width = document.getElementById('XO_w').value;
	var height = document.getElementById('XO_h').value;
  var note = document.getElementById('XO_note')
  if (24<=width && width<=72 && 12<=height && height<=72) {
     result.innerHTML="PASS";
      if (width*height/144/2<=15) {
        note.innerHTML="Gold Label & 1/8 glass";
      }
      else{
        note.innerHTML="Gold Label & 1/8 Tempered glass";
      }
      
  } 
  else {
      if (16<=width && width<=140 && 9.375<=height && 
        height<=80 && width*height/144/2<=18) {
        result.innerHTML="PASS";
        if (width*height/144/2<=15) {
          note.innerHTML="No Gold Label & 1/8 glass";        
      }
        else{
          note.innerHTML="No Gold Label & 1/8 Tempered glass";   
        }       
    }       
      else {
        result.innerHTML="FAIL";
        note.innerHTML="";
    }}
}

function getVP_XO_Result(){
  var result = document.getElementById('XO_result');
  var width = document.getElementById('XO_w').value;
  var height = document.getElementById('XO_h').value;
  var note = document.getElementById('XO_note')
  if (27<=width && width<=72 && 15.5<=height && height<=72) {
     result.innerHTML="PASS";
      if (width*height/144/2<=15) {
        note.innerHTML="Gold Label & 1/8 glass";
      }
      else{
        note.innerHTML="Gold Label & 1/8 Tempered glass";
      }
      
  } 
  else {
      if (16<=width && width<=140 && 9.375<=height && 
        height<=80 && width*height/144/2<=18) {
        result.innerHTML="PASS";
        if (width*height/144/2<=15) {
          note.innerHTML="No Gold Label & 1/8 glass";        
      }
        else{
          note.innerHTML="No Gold Label & 1/8 Tempered glass";   
        }       
    }       
      else {
        result.innerHTML="FAIL";
        note.innerHTML="";
    }}
}

function getVal_XO_Result(){
  var result = document.getElementById('XO_result');
  var width = Number(document.getElementById('XO_w').value);
  var height = Number(document.getElementById('XO_h').value);
  var note = document.getElementById('XO_note')
  var vent_weight=width+height;//*2/12*(0.33+0.935)//((width*height)/2/144)*3.28
  if (24<=width && width<=63 && 15<=height && height<=44) {
    result.innerHTML="PASS "+vent_weight+"lbs";
    note.innerHTML="Gold Label & 1/8 glass";      
  } 
  else {
      if (16<=width && width<=140 && 9.375<=height && 
        height<=80 && width*height/144/2<=18) {
        result.innerHTML="PASS";
        if (width*height/144/2<=15) {
          note.innerHTML="No Gold Label & 1/8 glass";        
      }
        else{
          note.innerHTML="No Gold Label & 1/8 Tempered glass";   
        }       
    }       
      else {
        result.innerHTML="FAIL";
        note.innerHTML="";
    }}
}


function getEQXOX_Result(){
	var result = document.getElementById('EQXOX_result');
	var width = document.getElementById('EQXOX_w').value;
	var height = document.getElementById('EQXOX_h').value;
  var note = document.getElementById('EQXOX_note')
  if (48<=width && width<=120 && 12<=height && height<=60) {
     result.innerHTML="PASS";
      if (width*height/144/3<=15) {
        note.innerHTML="Gold Label & 1/8 glass";
      }
      else{
        note.innerHTML="Gold Label & 1/8 Tempered glass";
      }
      
  } 
  else {
      if (36<=width && width<=140 && 9.375<=height && 
        height<=80 && width*height/144/3<=18) {
        result.innerHTML="PASS";
        if (width*height/144/3<=15) {
          note.innerHTML="No Gold Label & 1/8 glass";        
      }
        else{
          note.innerHTML="No Gold Label & 1/8 Tempered glass";   
        }       
    }       
      else {
        result.innerHTML="FAIL";
        note.innerHTML="";
    }}
}

function getVP_EQXOX_Result(){
  var result = document.getElementById('EQXOX_result');
  var width = document.getElementById('EQXOX_w').value;
  var height = document.getElementById('EQXOX_h').value;
  var note = document.getElementById('EQXOX_note')
  if (38<=width && width<=120 && 12<=height && height<=60) {
     result.innerHTML="PASS";
      if (width*height/144/3<=15) {
        note.innerHTML="Gold Label & 1/8 glass";
      }
      else{
        note.innerHTML="Gold Label & 1/8 Tempered glass";
      }
      
  } 
  else {
      if (36<=width && width<=140 && 9.375<=height && 
        height<=80 && width*height/144/3<=18) {
        result.innerHTML="PASS";
        if (width*height/144/3<=15) {
          note.innerHTML="No Gold Label & 1/8 glass";        
      }
        else{
          note.innerHTML="No Gold Label & 1/8 Tempered glass";   
        }       
    }       
      else {
        result.innerHTML="FAIL";
        note.innerHTML="";
    }}
}

function getUNEQXOX_Result(){
  var result = document.getElementById('UNEQXOX_result');
  var width = document.getElementById('UNEQXOX_w').value;
  var height = document.getElementById('UNEQXOX_h').value;
  var note = document.getElementById('UNEQXOX_note')
  if (65<=width && width<=120 && 12<=height && height<=60) {
     result.innerHTML="PASS";
      if (width*height/144/2<=15) {
        note.innerHTML="Gold Label & 1/8 glass";
      }
      else{
        note.innerHTML="Gold Label & FIXED:3/16 glass";
      }
      
  } 
  else {
      if (48<=width && width<=140 && 9.375<=height && 
        height<=80 && width*height/144/4<=18 && width*height/144/2<=50) {
        result.innerHTML="PASS";
        if (width*height/144/2<=15) {
          note.innerHTML="No Gold Label & 1/8 glass";        
      }
        if (15<width*height/144/2 && width*height/144/4<=15) {
          note.innerHTML="No Gold Label & FIXED:3/16 glass";   
      }   
        if (15<width*height/144/2 && 33>=width*height/144/2 && width*height/144/4<=18
          && width*height/144/4>=15) {
          note.innerHTML="No Gold Label & FIXED:3/16 glass + VENT:1/8 TEMP";   
      }    
        if (33<width*height/144/2 && 50>=width*height/144/2 && width*height/144/4<=18
          && width*height/144/4>15) {
          note.innerHTML="No Gold Label & FIXED:3/16 TEMP + VENT:1/8 TEMP";   
      }
    }       
      else {
        result.innerHTML="FAIL";
        note.innerHTML="";
    }}
}

function getVP_UNEQXOX_Result(){
  var result = document.getElementById('UNEQXOX_result');
  var width = document.getElementById('UNEQXOX_w').value;
  var height = document.getElementById('UNEQXOX_h').value;
  var note = document.getElementById('UNEQXOX_note')
  if (53<=width && width<=120 && 12<=height && height<=60) {
     result.innerHTML="PASS";
      if (width*height/144/2<=15) {
        note.innerHTML="Gold Label & 1/8 glass";
      }
      else{
        note.innerHTML="Gold Label & FIXED:3/16 glass";
      }
      
  } 
  else {
      if (48<=width && width<=140 && 9.375<=height && 
        height<=80 && width*height/144/4<=18 && width*height/144/2<=50) {
        result.innerHTML="PASS";
        if (width*height/144/2<=15) {
          note.innerHTML="No Gold Label & 1/8 glass";        
      }
        if (15<width*height/144/2 && width*height/144/4<=15) {
          note.innerHTML="No Gold Label & FIXED:3/16 glass";   
      }   
        if (15<width*height/144/2 && 33>=width*height/144/2 && width*height/144/4<=18
          && width*height/144/4>=15) {
          note.innerHTML="No Gold Label & FIXED:3/16 glass + VENT:1/8 TEMP";   
      }    
        if (33<width*height/144/2 && 50>=width*height/144/2 && width*height/144/4<=18
          && width*height/144/4>15) {
          note.innerHTML="No Gold Label & FIXED:3/16 TEMP + VENT:1/8 TEMP";   
      }
    }       
      else {
        result.innerHTML="FAIL";
        note.innerHTML="";
    }}
}

function getSH_Result(){
  var result = document.getElementById('SH_result');
  var width = document.getElementById('SH_w').value;
  var height = document.getElementById('SH_h').value;
  var note = document.getElementById('SH_note')
  if (10<=width && width<=47 && 20<=height && height<=84) {
    if(12<=width && 24<=height){
      note.innerHTML="Gold Label & 1/8 glass";
      result.innerHTML="PASS";
    } else{
      if (width*height/144/2>=1){
      note.innerHTML="No Gold Label & 1/8 glass";
        result.innerHTML="PASS";
      } else{
        result.innerHTML="FAIL";
        note.innerHTML="";
      }
    }
  } 
  else {
      if (10<=width && width<=56 && 20<=height && 
        height<=124 && width*height/144/2<=15) {
        result.innerHTML="Ask Engineer";
        note.innerHTML="";          
      }             
      else {
        result.innerHTML="FAIL";
        note.innerHTML="";
    }}
}

function getVP_SH_Result(){
  var result = document.getElementById('SH_result');
  var width = document.getElementById('SH_w').value;
  var height = document.getElementById('SH_h').value;
  var note = document.getElementById('SH_note')

  if (15.5<=width && width<=48 && 20<=height && height<=84) {
     result.innerHTML="PASS";
    if(15.5<=width && 27<=height){
      note.innerHTML="Gold Label & 1/8 glass";
      result.innerHTML="PASS";
    } else{
      if (width*height/144/2>=1){
      note.innerHTML="No Gold Label & 1/8 glass";
        result.innerHTML="PASS";
      } else{
        result.innerHTML="FAIL";
        note.innerHTML="";
      }
    }
  } 
  else {
      if (15.5<=width && width<=56 && 20<=height && 
        height<=124 && width*height/144/2<=15) {
        result.innerHTML="Ask Engineer";
        note.innerHTML="";          
      }             
      else {
        result.innerHTML="FAIL";
        note.innerHTML="";
    }}
}

function getVP_CA_Result(){
  var result = document.getElementById('CA_result');
  var width = document.getElementById('CA_w').value;
  var height = document.getElementById('CA_h').value;
  var note = document.getElementById('CA_note')
  if (16<=width && width<=36 && 18<=height && height<=72 && width*height/144<=20) {
     result.innerHTML="PASS";
     if (width*height<=15) {
      note.innerHTML="Gold Label & 1/8 glass";
     } else {
      note.innerHTML="Gold Label & 1/8 TEMP";
     }     
  } 
  else {
        result.innerHTML="FAIL";
        note.innerHTML="";
    }
}

function getVP_AW_Result(){
  var result = document.getElementById('AW_result');
  var width = document.getElementById('AW_w').value;
  var height = document.getElementById('AW_h').value;
  var note = document.getElementById('AW_note')
  if (13<=width && width<=60 && 16<=height && height<=36 && width*height/144<=15) {
    result.innerHTML="PASS";
    note.innerHTML="Gold Label & 1/8 glass";    
  } 
  else {
    if (13<=width && width<=60 && 16<=height && height<=36 && width*height/144<=20){
      result.innerHTML="PASS";
      note.innerHTML="No Gold Label & 3/16 glass"; 
    } else{        
        result.innerHTML="FAIL";
        note.innerHTML="";}

    }
}

function get2PD_Result(){
  var result = document.getElementById('2PD_result');
  var width = document.getElementById('2PD_w').value;
  var height = document.getElementById('2PD_h').value;
  var note = document.getElementById('2PD_note')
  if (60<=width && width<=96 && 70<=height && height<=96 && width*height/144<=64) {
    result.innerHTML="PASS";
    if (width*height/144/2<=20) {
      note.innerHTML="Gold Label & 1/8 TEMP";
    } else {
      note.innerHTML="Gold Label & 3/16 TEMP";
    }   
  } 
  else {
    if (60<=width && width<=120 && 70<=height && height<=82 && width*height/144<=68.33333){
      result.innerHTML="PASS";
      if (width*height/144/2<=20) {
        note.innerHTML="Gold Label & 1/8 TEMP";
      } else {
        note.innerHTML="Gold Label & 3/16 TEMP"; 
      }      
    } else{        
        result.innerHTML="FAIL";
        note.innerHTML="";}
    }
}

function get3PD_Result(){
  var result = document.getElementById('3PD_result');
  var width = document.getElementById('3PD_w').value;
  var height = document.getElementById('3PD_h').value;
  var note = document.getElementById('3PD_note')
  if (90<=width && width<=144 && 70<=height && height<=92 && width*height/144/3<=32) {
    result.innerHTML="PASS";
    if (width*height/144/3<=20) {
      note.innerHTML="Gold Label & 1/8 TEMP";
    } else {
      note.innerHTML="Gold Label & 3/16 TEMP";
    }   
  } 
  else {
    result.innerHTML="FAIL";
    note.innerHTML="";
  }
}

function get4PD_Result(){
  var result = document.getElementById('4PD_result');
  var width = document.getElementById('4PD_w').value;
  var height = document.getElementById('4PD_h').value;
  var note = document.getElementById('4PD_note')
  if (120<=width && width<=192 && 70<=height && height<=92 && width*height/144<=122.67) {
    if (width<=187.5) {
      result.innerHTML="PASS w/ Rrtro-Fit, Nail-on, Block";
    } else {
      if (width<=189) {
        result.innerHTML="PASS w/ Nail-on, Block";
      } else {
        result.innerHTML="PASS w/ Block";
      }
    }
    
    if (width*height/144/4<=20) {
      note.innerHTML="Gold Label & 1/8 TEMP";
    } else {
      note.innerHTML="Gold Label & 3/16 TEMP";
    }   
  } 
  else {
    if (60<=width && width<=120 && 70<=height && height<=82 && width*height<=68.33333){
      result.innerHTML="PASS";
      if (width*height/144/3<=20) {
        note.innerHTML="Gold Label & 1/8 TEMP";
      } else {
        note.innerHTML="Gold Label & 3/16 TEMP"; 
      }      
    } else{        
        result.innerHTML="FAIL";
        note.innerHTML="";}
    }
}










function reset(){
 pw_result.innerHTML="";
 sh_result.innerHTML="";
 xo_result.innerHTML="";
 eqxox_result.innerHTML="";
 uneqxox_result.innerHTML="";
 pw_note.innerHTML="";
 sh_note.innerHTML="";
 xo_note.innerHTML="";
 eqxox_note.innerHTML="";
 uneqxox_note.innerHTML=""; 
 _2PD_note.innerHTML = "";
 _2PD_result.innerHTML = "";
 _3PD_note.innerHTML = "";
 _3PD_result.innerHTML = "";
 _4PD_note.innerHTML = "";
 _4PD_result.innerHTML = "";
 aw_result.innerHTML = "";
 aw_note.innerHTML = "";
 ca_note.innerHTML = "";
 ca_result.innerHTML = "";
 dh_result.innerHTML = "";
 dh_note.innerHTML = "";
 dsl_result.innerHTML = "";
 dsl_note.innerHTML = "";
 sd_result.innerHTML = "";
 sd_note.innerHTML = "";
 dsd_result.innerHTML = "";
 dsd_note.innerHTML = "";

}


