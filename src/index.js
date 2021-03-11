module.exports = function toReadable (number) {
  let h = Math.trunc(number/100);
  let d = Math.trunc(number/10)-h*10;
  let u = number % 10;
  let ans = '';
  if(number == 0)return 'zero';
  if(h == 1) ans += 'one hundred';
  if(h == 2) ans += 'two hundred';
  if(h == 3) ans += 'three hundred';
  if(h == 4) ans += 'four hundred';
  if(h == 5) ans += 'five hundred';
  if(h == 6) ans += 'six hundred';
  if(h == 7) ans += 'seven hundred';
  if(h == 8) ans += 'eight hundred';
  if(h == 9) ans += 'nine hundred';
  if(d == 0 && u == 1){ ans += ' one';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }return ans;}
  if(d == 0 && u == 2){ ans += ' two';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }return ans;}
  if(d == 0 && u == 3){ ans += ' three';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }return ans;}
  if(d == 0 && u == 4){ ans += ' four';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }return ans;}
  if(d == 0 && u == 5){ ans += ' five';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }return ans;}
  if(d == 0 && u == 6){ ans += ' six';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }return ans;}
  if(d == 0 && u == 7){ ans += ' seven';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }return ans;}
  if(d == 0 && u == 8){ ans += ' eight';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }return ans;}
  if(d == 0 && u == 9){ ans += ' nine';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }return ans;}
  if(d == 1 && u == 0){ ans += ' ten';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }return ans;}
  if(d == 1 && u == 1){ ans += ' eleven';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }return ans;}
  if(d == 1 && u == 2){ ans += ' twelve';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }return ans;}
  if(d == 1 && u == 3){ ans += ' thirteen';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }return ans;}
  if(d == 1 && u == 4){ ans += ' fourteen';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }return ans;}
  if(d == 1 && u == 5){ ans += ' fifteen';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }return ans;}
  if(d == 1 && u == 6){ ans += ' sixteen';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }return ans;}
  if(d == 1 && u == 7){ ans += ' seventeen';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }return ans;}
  if(d == 1 && u == 8){ ans += ' eighteen';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }return ans;}
  if(d == 1 && u == 9){ ans += ' nineteen';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }return ans;}
  if(d == 1){ ans += ' ten';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }}
  if(d == 2){ ans += ' twenty';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }}
  if(d == 3){ ans += ' thirty';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }}
  if(d == 4){ ans += ' forty';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }}
  if(d == 5){ ans += ' fifty';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }}
  if(d == 6){ ans += ' sixty';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }}
  if(d == 7){ ans += ' seventy';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }}
  if(d == 8){ ans += ' eighty';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }}
  if(d == 9){ ans += ' ninety';if(h == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }}
  if(u == 1) ans += ' one';if(h == 0 && d == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }
  if(u == 2) ans += ' two';if(h == 0 && d == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }
  if(u == 3) ans += ' three';if(h == 0 && d == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }
  if(u == 4) ans += ' four';if(h == 0 && d == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }
  if(u == 5) ans += ' five';if(h == 0 && d == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }
  if(u == 6) ans += ' six';if(h == 0 && d == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }
  if(u == 7) ans += ' seven';if(h == 0 && d == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }
  if(u == 8) ans += ' eight';if(h == 0 && d == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }
  if(u == 9) ans += ' nine';if(h == 0 && d == 0){   ans = ans.split('');ans.splice(0,1);ans = ans.join(''); }
  return ans;
}
