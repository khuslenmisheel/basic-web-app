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

  return "";
}
