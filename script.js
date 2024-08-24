function fibonacci(num) {
// your code here
	let a=0,b=1,c=0,n=1;
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
