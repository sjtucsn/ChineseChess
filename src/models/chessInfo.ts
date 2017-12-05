//该文件用于存放一些与象棋棋盘棋子着法等相关的参数信息

//棋子在棋盘上各个点的价值
let chessValue = {
	//车价值
	c:[
		[206, 208, 207, 213, 214, 213, 207, 208, 206],
		[206, 212, 209, 216, 233, 216, 209, 212, 206],
		[206, 208, 207, 214, 216, 214, 207, 208, 206],
		[206, 213, 213, 216, 216, 216, 213, 213, 206],
		[208, 211, 211, 214, 215, 214, 211, 211, 208],
		
		[208, 212, 212, 214, 215, 214, 212, 212, 208],
		[204, 209, 204, 212, 214, 212, 204, 209, 204],
		[198, 208, 204, 212, 212, 212, 204, 208, 198],
		[200, 208, 206, 212, 200, 212, 206, 208, 200],
		[194, 206, 204, 212, 200, 212, 204, 206, 194]
	],
	
	//马价值
	m:[
		[90, 90, 90, 96, 90, 96, 90, 90, 90],
		[90, 96,103, 97, 94, 97,103, 96, 90],
		[92, 98, 99,103, 99,103, 99, 98, 92],
		[93,108,100,107,100,107,100,108, 93],
		[90,100, 99,103,104,103, 99,100, 90],
		
		[90, 98,101,102,103,102,101, 98, 90],
		[92, 94, 98, 95, 98, 95, 98, 94, 92],
		[93, 92, 94, 95, 92, 95, 94, 92, 93],
		[85, 90, 92, 93, 78, 93, 92, 90, 85],
		[88, 85, 90, 88, 90, 88, 90, 85, 88]
	],
	
	//相价值
	x:[
		[0, 0,20, 0, 0, 0,20, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[18,0, 0, 0,23, 0, 0, 0,18],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0,20, 0, 0, 0,20, 0, 0],
		
		[0, 0,20, 0, 0, 0,20, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[18,0, 0, 0,23, 0, 0, 0,18],
		[0, 0, 0, 0, 0, 0, 0, 0, 0], 
		[0, 0,20, 0, 0, 0,20, 0, 0]
	],
	
	//士价值
	s:[
		[0, 0, 0,20, 0,20, 0, 0, 0],
		[0, 0, 0, 0,23, 0, 0, 0, 0],
		[0, 0, 0,20, 0,20, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0,20, 0,20, 0, 0, 0],
		[0, 0, 0, 0,23, 0, 0, 0, 0], 
		[0, 0, 0,20, 0,20, 0, 0, 0]
	],
	
	//将价值
	j:[
		[0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
		[0, 0, 0, 8888, 8888, 8888, 0, 0, 0], 
		[0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 8888, 8888, 8888, 0, 0, 0],
		[0, 0, 0, 8888, 8888, 8888, 0, 0, 0], 
		[0, 0, 0, 8888, 8888, 8888, 0, 0, 0]
	],
	
	//炮价值
	p:[
		
		[100, 100,  96, 91,  90, 91,  96, 100, 100],
		[ 98,  98,  96, 92,  89, 92,  96,  98,  98],
		[ 97,  97,  96, 91,  92, 91,  96,  97,  97],
		[ 96,  99,  99, 98, 100, 98,  99,  99,  96],
		[ 96,  96,  96, 96, 100, 96,  96,  96,  96], 
		
		[ 95,  96,  99, 96, 100, 96,  99,  96,  95],
		[ 96,  96,  96, 96,  96, 96,  96,  96,  96],
		[ 97,  96, 100, 99, 108, 99, 100,  96,  97],
		[ 96,  97,  98, 98,  98, 98,  98,  97,  96],
		[ 96,  96,  97, 99,  99, 99,  97,  96,  96]
	],
	
	//卒价值
	z:[
		[ 9,  9,  9, 11, 13, 11,  9,  9,  9],
		[19, 24, 34, 42, 44, 42, 34, 24, 19],
		[19, 24, 32, 37, 37, 37, 32, 24, 19],
		[19, 23, 27, 29, 30, 29, 27, 23, 19],
		[14, 18, 20, 27, 29, 27, 20, 18, 14],
		
		[ 7,  0, 13,  0, 16,  0, 13,  0,  7],
		[ 7,  0,  7,  0, 15,  0,  7,  0,  7], 
		[ 0,  0,  0,  0,  0,  0,  0,  0,  0],
		[ 0,  0,  0,  0,  0,  0,  0,  0,  0],
		[ 0,  0,  0,  0,  0,  0,  0,  0,  0]
	]
}

//添加对方棋子价值，即数组取逆
chessValue = {...chessValue, 
							C: [...chessValue.c].reverse(), 
							M: [...chessValue.m].reverse(),
							X: [...chessValue.x].reverse(),
							S: [...chessValue.s].reverse(),
							J: [...chessValue.j].reverse(),
							P: [...chessValue.p].reverse(),
							Z: [...chessValue.z].reverse()}

export {chessValue}

//各个棋子的着点方法
export const nextPace = {
	//车
	c(x:number, y:number, board:string[][], side:number){
		let d:Array<[number,number]> = [];;
		//左侧检索
		for (let i=x-1; i>= 0; i--){
			if (board[y][i]) {
				if ((board[y][i][0]>='a'?1:-1) != side) d.push([i,y]);
				break
			} else {
				d.push([i,y])	
			}
		}
		//右侧检索
		for (let i=x+1; i <= 8; i++){
			if (board[y][i]) {
				if ((board[y][i][0]>='a'?1:-1) != side) d.push([i,y]);
				break
			} else {
				d.push([i,y])	
			}
		}
		//上检索
		for (let i = y-1 ; i >= 0; i--){
			if (board[i][x]) {
				if ((board[i][x][0]>='a'?1:-1) != side) d.push([x,i]);
				break
			} else {
				d.push([x,i])	
			}
		}
		//下检索
		for (let i = y+1 ; i<= 9; i++){
			if (board[i][x]) {
				if ((board[i][x][0]>='a'?1:-1) != side) d.push([x,i]);
				break
			} else {
				d.push([x,i])	
			}
		}
		return d;
	},
	//马
	m(x:number, y:number, board:string[][], side:number){
		let d:Array<[number,number]> = [];;
		//1点
		if ( y-2>= 0 && x+1<= 8 && !board[y-1][x] &&(!board[y-2][x+1] || (board[y-2][x+1][0]>='a'?1:-1) != side)) d.push([x+1,y-2]);
		//2点
		if ( y-1>= 0 && x+2<= 8 && !board[y][x+1] &&(!board[y-1][x+2] || (board[y-1][x+2][0]>='a'?1:-1) != side)) d.push([x+2,y-1]);
		//4点
		if ( y+1<= 9 && x+2<= 8 && !board[y][x+1] &&(!board[y+1][x+2] || (board[y+1][x+2][0]>='a'?1:-1) != side)) d.push([x+2,y+1]);
		//5点
		if ( y+2<= 9 && x+1<= 8 && !board[y+1][x] &&(!board[y+2][x+1] || (board[y+2][x+1][0]>='a'?1:-1) != side)) d.push([x+1,y+2]);
		//7点
		if ( y+2<= 9 && x-1>= 0 && !board[y+1][x] &&(!board[y+2][x-1] || (board[y+2][x-1][0]>='a'?1:-1) != side)) d.push([x-1,y+2]);
		//8点
		if ( y+1<= 9 && x-2>= 0 && !board[y][x-1] &&(!board[y+1][x-2] || (board[y+1][x-2][0]>='a'?1:-1) != side)) d.push([x-2,y+1]);
		//10点
		if ( y-1>= 0 && x-2>= 0 && !board[y][x-1] &&(!board[y-1][x-2] || (board[y-1][x-2][0]>='a'?1:-1) != side)) d.push([x-2,y-1]);
		//11点
		if ( y-2>= 0 && x-1>= 0 && !board[y-1][x] &&(!board[y-2][x-1] || (board[y-2][x-1][0]>='a'?1:-1) != side)) d.push([x-1,y-2]);
		return d;
	},
	//相
	x(x:number, y:number, board:string[][], side:number){
		let d:Array<[number,number]> = [];;
		if (side == 1){ //红方
			//4点半
			if ( y+2<= 9 && x+2<= 8 && !board[y+1][x+1] && (!board[y+2][x+2] || board[y+2][x+2][0]<'a')) d.push([x+2,y+2]);
			//7点半
			if ( y+2<= 9 && x-2>= 0 && !board[y+1][x-1] && (!board[y+2][x-2] || board[y+2][x-2][0]<'a')) d.push([x-2,y+2]);
			//1点半
			if ( y-2>= 5 && x+2<= 8 && !board[y-1][x+1] && (!board[y-2][x+2] || board[y-2][x+2][0]<'a')) d.push([x+2,y-2]);
			//10点半
			if ( y-2>= 5 && x-2>= 0 && !board[y-1][x-1] && (!board[y-2][x-2] || board[y-2][x-2][0]<'a')) d.push([x-2,y-2]);
		} else {
			//4点半
			if ( y+2<= 4 && x+2<= 8 && !board[y+1][x+1] && (!board[y+2][x+2] || board[y+2][x+2][0]>='a')) d.push([x+2,y+2]);
			//7点半
			if ( y+2<= 4 && x-2>= 0 && !board[y+1][x-1] && (!board[y+2][x-2] || board[y+2][x-2][0]>='a')) d.push([x-2,y+2]);
			//1点半
			if ( y-2>= 0 && x+2<= 8 && !board[y-1][x+1] && (!board[y-2][x+2] || board[y-2][x+2][0]>='a')) d.push([x+2,y-2]);
			//10点半
			if ( y-2>= 0 && x-2>= 0 && !board[y-1][x-1] && (!board[y-2][x-2] || board[y-2][x-2][0]>='a')) d.push([x-2,y-2]);
		}
		return d;
	},
	//士
	s(x:number, y:number, board:string[][], side:number){
		let d:Array<[number,number]> = [];;
		if (side == 1){ //红方
			//4点半
			if ( y+1<= 9 && x+1<= 5 && (!board[y+1][x+1] || board[y+1][x+1][0]<'a')) d.push([x+1,y+1]);
			//7点半
			if ( y+1<= 9 && x-1>= 3 && (!board[y+1][x-1] || board[y+1][x-1][0]<'a')) d.push([x-1,y+1]);
			//1点半
			if ( y-1>= 7 && x+1<= 5 && (!board[y-1][x+1] || board[y-1][x+1][0]<'a')) d.push([x+1,y-1]);
			//10点半
			if ( y-1>= 7 && x-1>= 3 && (!board[y-1][x-1] || board[y-1][x-1][0]<'a')) d.push([x-1,y-1]);
		} else {
			//4点半
			if ( y+1<= 2 && x+1<= 5 && (!board[y+1][x+1] || board[y+1][x+1][0]>='a')) d.push([x+1,y+1]);
			//7点半
			if ( y+1<= 2 && x-1>= 3 && (!board[y+1][x-1] || board[y+1][x-1][0]>='a')) d.push([x-1,y+1]);
			//1点半
			if ( y-1>= 0 && x+1<= 5 && (!board[y-1][x+1] || board[y-1][x+1][0]>='a')) d.push([x+1,y-1]);
			//10点半
			if ( y-1>= 0 && x-1>= 3 && (!board[y-1][x-1] || board[y-1][x-1][0]>='a')) d.push([x-1,y-1]);
		}
		return d;
	},
	//将
	j(x:number, y:number, board:string[][], side:number) {
		let d:Array<[number,number]> = [];
		//判断是否有对将的情况发生
		let isNull = (side: number) => {
			if (side == 1) {
				for (let i=y-1; i>=0; i--) {
					if (!board[i][x]) {
						continue
					} else if (board[i][x][0]!='J') {
						return false
					} else {
						return i
					}
				}
				return false
			} else {
				for (let i=y+1; i<=9; i++) {
					if (!board[i][x]) {
						continue
					} else if (board[i][x][0]!='j') {
						return false
					} else {
						return i
					}
				}
				return false
			}
		}
		if (side == 1){ //红方
			//下
			if ( y+1<= 9 && (!board[y+1][x] || board[y+1][x][0]<'a')) d.push([x,y+1]);
			//上
			if ( y-1>= 7 && (!board[y-1][x] || board[y-1][x][0]<'a')) d.push([x,y-1]);
			//老将对老将的情况
			if (isNull(side)||isNull(side)===0) d.push([x, isNull(side) as number]);
			
		} else {
			//下
			if ( y+1<= 2 && (!board[y+1][x] || board[y+1][x][0]>='a')) d.push([x,y+1]);
			//上
			if ( y-1>= 0 && (!board[y-1][x] || board[y-1][x][0]>='a')) d.push([x,y-1]);
			//老将对老将的情况
			if (isNull(side)) d.push([x, isNull(side) as number]);
		}
		//右
		if ( x+1<= 5  && (!board[y][x+1] || (board[y][x+1][0]>='a'?1:-1) != side)) d.push([x+1,y]);
		//左
		if ( x-1>= 3 && (!board[y][x-1] || (board[y][x-1][0]>='a'?1:-1) != side)) d.push([x-1,y]);
		return d;
	},
	//炮
	p(x:number, y:number, board:string[][], side:number) {
		let d:Array<[number,number]> = [];;
		//左侧检索
		let n=0;
		for (let i=x-1; i>= 0; i--){
			if (board[y][i]) {
				if (n==0){
					n++;
					continue;
				} else {
					if ((board[y][i][0]>='a'?1:-1) != side) d.push([i,y]);
					break	
				}
			} else {
				if(n==0) d.push([i,y])	
			}
		}
		//右侧检索
		n=0;
		for (let i=x+1; i <= 8; i++){
			if (board[y][i]) {
				if (n==0){
					n++;
					continue;
				} else {
					if ((board[y][i][0]>='a'?1:-1) != side) d.push([i,y]);
					break	
				}
			} else {
				if(n==0) d.push([i,y])	
			}
		}
		//上检索
		n=0;
		for (let i = y-1 ; i >= 0; i--){
			if (board[i][x]) {
				if (n==0){
					n++;
					continue;
				} else {
					if ((board[i][x][0]>='a'?1:-1) != side) d.push([x,i]);
					break	
				}
			} else {
				if(n==0) d.push([x,i])	
			}
		}
		//下检索
		n=0;
		for (let i = y+1 ; i<= 9; i++){
			if (board[i][x]) {
				if (n==0){
					n++;
					continue;
				} else {
					if ((board[i][x][0]>='a'?1:-1) != side) d.push([x,i]);
					break	
				}
			} else {
				if(n==0) d.push([x,i])	
			}
		}
		return d;
	},
	//卒
	z(x:number, y:number, board:string[][], side:number){
		let d:Array<[number,number]> = [];;
		if (side == 1){ //红方
			//上
			if ( y-1>= 0 && (!board[y-1][x] || board[y-1][x][0]<'a')) d.push([x,y-1]);
			//右
			if ( x+1<= 8 && y<=4  && (!board[y][x+1] || board[y][x+1][0]<'a')) d.push([x+1,y]);
			//左
			if ( x-1>= 0 && y<=4 && (!board[y][x-1] || board[y][x-1][0]<'a'))d.push([x-1,y]);
		} else {
			//下
			if ( y+1<= 9  && (!board[y+1][x] || (board[y+1][x][0]>='a'?1:-1) != side)) d.push([x,y+1]);
			//右
			if ( x+1<= 8 && y>=5  && (!board[y][x+1] || (board[y][x+1][0]>='a'?1:-1) != side)) d.push([x+1,y]);
			//左
			if ( x-1>= 0 && y>=5 && (!board[y][x-1] || (board[y][x-1][0]>='a'?1:-1) != side))d.push([x-1,y]);
		}
		return d;
	}
}
