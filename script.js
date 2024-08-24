function fibonacci(num) {
// your code here
	let a=0,b=1,c=0,n=2;
	if(num===1)
		return 0;
	if(num===2)
		return 1;
	while(true)
	{
		if(n ===num)
		{
			return c;
		}
		c=a+b;
		a=b;
		b=c;
		n++;
	}
}

module.exports = fibonacci;
