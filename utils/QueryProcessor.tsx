export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew")) {
    return (
      "kmisheel"
    );
  }
  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "Khuslen"
    );
  }
  if (query.toLowerCase().includes("Which of the following numbers is the largest:")) {
    const max = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/)
    if(max){
      const x = parseInt(max[1]);
      const y = parseInt(max[2]);
      const z = parseInt(max[3]);
      return (Math.max(x, Math.max(y,z))).toString()
    }
    return ""
  }
  const max = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/)
  if(max){
      const x = parseInt(max[1]);
      const y = parseInt(max[2]);
      const z = parseInt(max[3]);
      return (Math.max(x, Math.max(y,z))).toString()
  }
  const mult = query.match(/What is (\d+) multiplied by (\d+)?/)
  if(mult){
      const x = parseInt(mult[1]);
      const y = parseInt(mult[2]);
      return (x*y).toString()
  }
  const plus = query.match(/What is (\d+) plus (\d+)?/)
  if(plus){
      const x = parseInt(plus[1]);
      const y = parseInt(plus[2]);
      return (x+y).toString()
  }
  const minus= query.match(/What is (\d+) minus (\d+)?/)
  if(minus){
      const x = parseInt(minus[1]);
      const y = parseInt(minus[2]);
      return (x-y).toString()
  }

  const primes= query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)?/)
  if(primes){
      const x = parseInt(primes[1]);
      const y = parseInt(primes[2]);
      const a = parseInt(primes[3]);
      const b = parseInt(primes[4]);
      let isx = true;
      let isy = true;
      let isa = true;
      let isb = true;
      const m = Math.max(Math.max(x,y), Math.max(a,b))
      for(let i = 2, s = Math.sqrt(m); i <= s; i++) {
        if(x % i === 0){
          isx = false;
        } 
        if(y % i === 0){
          isy = false;
        } 
        if(a% i === 0){
          isa = false;
        } 
        if(b % i === 0){
          isb = false;
        } 
      }
      if(isx){
        return x.toString();
      }
      if(isy){
        return y.toString();
      }
      if(isa){
        return a.toString();
      }
      if(isb){
        return b.toString();
      }
  }
  return "";
}
