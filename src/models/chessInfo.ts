//该文件用于存放一些与象棋棋盘棋子着法等相关的参数信息

//初始棋盘
export const initBoard = [
	['C0','M0','X0','S0','J0','S1','X1','M1','C1'],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,'P0',    ,    ,    ,    ,    ,'P1',    ],
	['Z0',    ,'Z1',    ,'Z2',    ,'Z3',    ,'Z4'],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	['z0',    ,'z1',    ,'z2',    ,'z3',    ,'z4'],
	[    ,'p0',    ,    ,    ,    ,    ,'p1',    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	['c0','m0','x0','s0','j0','s1','x1','m1','c1']
];

//各个棋子的着点方法
export const nextPace = {
	//车
	c(x:number, y:number, board:string[][], side:number){
		let d:number[][] = [];
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
		let d:number[][] = [];
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
		let d:number[][] = [];
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
		let d:number[][] = [];
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
		let d:number[][] = []
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
		let d:number[][] = [];
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
		let d:number[][] = [];
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
