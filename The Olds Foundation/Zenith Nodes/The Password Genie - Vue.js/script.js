/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

new Vue({
  el: '#app',
  data() {
    return {
      password: '',
      copied: false,
      settings: {
        maxLength: 64,
        maxDigits: 10,
        maxSymbols: 10,
        length: 12,
        digits: 4,
        symbols: 2,
        ambiguous: true,
      }
    };
  },
  computed: {
    lengthThumbPosition: function() {
      return (( (this.settings.length - 6) / (this.settings.maxLength - 6)) * 100);
    },
    digitsThumbPosition: function() {
      return (( (this.settings.digits - 0) / (this.settings.maxDigits - 0)) * 100);
    },
    symbolsThumbPosition: function() {
      return (( (this.settings.symbols - 0) / (this.settings.maxSymbols - 0)) * 100);
    },
    strength: function() {
      var count = {
        excess: 0,
        upperCase: 0,
        numbers: 0,
        symbols: 0
      };


      var weight = {
        excess: 3,
        upperCase: 4,
        numbers: 5,
        symbols: 5,
        combo: 0, 
        flatLower: 0,
        flatNumber: 0
      };

      var strength = {
        text: '',
        score: 0
      };

      
      var baseScore = 30;

      for (i=0; i < this.password.length;i++){
        if (this.password.charAt(i).match(/[A-Z]/g)) {count.upperCase++;}
        if (this.password.charAt(i).match(/[0-9]/g)) {count.numbers++;}
        if (this.password.charAt(i).match(/(.*[!,@,#,$,%,^,&,*,?,_,~])/)) {count.symbols++;} 
      }
      
      count.excess = this.password.length - 6;
      
      if (count.upperCase && count.numbers && count.symbols){
        weight.combo = 25; 
      }
      else if ((count.upperCase && count.numbers) || (count.upperCase && count.symbols) || (count.numbers && count.symbols)){
        weight.combo = 15; 
      }
      
      if (this.password.match(/^[\sa-z]+$/))
      { 
        weight.flatLower = -30;
      }
      
      if (this.password.match(/^[\s0-9]+$/))
      { 
        weight.flatNumber = -50;
      }

      var score = 
        baseScore + 
        (count.excess * weight.excess) + 
        (count.upperCase * weight.upperCase) + 
        (count.numbers * weight.numbers) + 
        (count.symbols * weight.symbols) + 
        weight.combo + weight.flatLower + 
        weight.flatNumber;

      if(score < 30 ) {
        strength.text = "weak";
        strength.score = 10;
        return strength;
      } else if (score >= 30 && score < 75 ){
        strength.text = "average";
        strength.score = 40;
        return strength;
      } else if (score >= 75 && score < 150 ){
        strength.text = "strong";
        strength.score = 75;
        return strength;
      } else {
        strength.text = "secure";
        strength.score = 100;
        return strength;
      }
    },
  },
  mounted() {
    this.generatePassword();
  },
  watch: {
    settings: {
      handler: function() {
        this.generatePassword();
      },
      deep: true
    }
  },
  methods: {
    // copy password to clipboard
    copyToClipboard(){
      // we should create a textarea, put the password inside it, select it and finally copy it
      var copyElement = document.createElement("textarea");
      copyElement.style.opacity = '0';
      copyElement.style.position = 'fixed';
      copyElement.textContent = this.password;
      var body = document.getElementsByTagName('body')[0];
      body.appendChild(copyElement);
      copyElement.select();
      document.execCommand('copy');
      body.removeChild(copyElement);
      
      this.copied = true;
      // reset this.copied
      setTimeout(() => {
        this.copied = false;
      }, 750);
    },
    // generate the password
    generatePassword() {
      var lettersSetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      var symbolsSetArray = [ "=","+","-","^","?","!","%","&","*","$","#","^","@","|"];
      //var ambiguousSetArray = ["(",")","{","}","[","]","(",")","/","~",";",":",".","<",">"];
      var passwordArray = [];
      var digitsArray = [];
      var digitsPositionArray = [];


      // first, fill the password array with letters, uppercase and lowecase
      for (var i = 0; i < this.settings.length; i++) {
        // get an array for all indexes of the password array
        digitsPositionArray.push(i);

        var upperCase = Math.round(Math.random() * 1);
        if (upperCase === 0) {
          passwordArray[i] = lettersSetArray[Math.floor(Math.random()*lettersSetArray.length)].toUpperCase();
        }
        else {
          passwordArray[i] = lettersSetArray[Math.floor(Math.random()*lettersSetArray.length)];
        }
      }

      // Add digits to password
      for (i = 0; i < this.settings.digits; i++) {
        digit = Math.round(Math.random() * 9);
        numberIndex = digitsPositionArray[Math.floor(Math.random()*digitsPositionArray.length)];

        passwordArray[numberIndex] =  digit;

        /* remove position from digitsPositionArray so we make sure to the have the exact number of digits in our password
        since without this step, numbers may override other numbers */

        var j = digitsPositionArray.indexOf(numberIndex);
        if(i != -1) {
          digitsPositionArray.splice(j, 1);
        }
      }

      // add special charachters "symbols"
      for (i = 0; i < this.settings.symbols; i++) {
        var symbol = symbolsSetArray[Math.floor(Math.random()*symbolsSetArray.length)];
        var symbolIndex = digitsPositionArray[Math.floor(Math.random()*digitsPositionArray.length)];

        passwordArray[symbolIndex] =  symbol;

        /* remove position from digitsPositionArray so we make sure to the have the exact number of digits in our password
        since without this step, numbers may override other numbers */

        var j = digitsPositionArray.indexOf(symbolIndex);
        if(i != -1) {
          digitsPositionArray.splice(j, 1);
        }
      }
      this.password = passwordArray.join("");
    },
  },
});