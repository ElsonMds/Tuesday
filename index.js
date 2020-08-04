const somar=(a,b)=>{
    return (c)=>{
        return c+a+b;
    }
}

const res=somar(3,4)(6);
console.log(res);