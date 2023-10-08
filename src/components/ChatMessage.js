import React from "react";

const ChatMessage = ({ id, name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8"
        alt="user"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAY1BMVEUAAAD////7+/v39/elpaVUVFTx8fHo6OgiIiKBgYGysrLHx8fh4eGsrKzExMTZ2dnS0tKJiYk3NzdEREQYGBgODg57e3uUlJS6urqbm5tpaWkoKChjY2MwMDA/Pz9LS0txcXEFHRPMAAAEMklEQVRoge2b6ZaiMBCFwy6iCIgiDSrv/5TTdvdMs6TIrQrQM+fM/Y+fJKk9KEekMNnnbbG7XHb3IPbTSPYrjqMEzxzqc6kGutzzbBu8m7RKq+feWx+fBHr4S4/9yvjwjYZ/rMBpTfx+Hv5StRrejc10pVqWFTDwM7ve1/mwBt47Y3Sldgw+ivceKP1d+PqDeBdc+a/3h/kgvuPQlQpQD4Thjzy6UvGS+IhLV+q2IJ618V/Clh/BA85uqutS+LCQ4DHrA/CilwdPH4C/y/DQ65vxqZCu6kXwnRQfuEvgpXSlgNzDiM/keCD3MuJrOb5dAN/J8Xfz5hvxnDg/UmM2PRPeldOVMpceJnxog0+s8YJY+y1z1DXhDzZ4s+Wtij/+62//w3vv2eDtT75FxFEXc8wx4iVp5pea0B4PlbV6FUa6Gc+uML4FJLtGvIXlpQvgnZ2UXgKFthlfSfFAtgHgT1I80ucC8nyh6TVIlQfgExneB+gIntfZ+CMgy8cqXFGubQ62KF7i+R4QHWyuNGw82FzD8GzjQ5vLYGfL59HRzhLcVsw5dMTf8fAc/hmmM1rKsO9vIYvn4tFa98qgs8YJNyT2Qr5WhHeipwkOZJdy/PsCXGbpSDfJBu+EFd1ni/nTRP4YMTxqOw6PXDLKlEwxnawOhptQVBnnvDPxXjQtGLLUr/Kuiyv/lmnKiSiCWtoGfJjWn8lG6TNGpNGniyxb37Qos/jkrRdpGyBt/5Dr93amiGcbPDP4dJxkddDhOo0fa2d8AYmPNIPqEgjjutAQkxtH4YnS7mlYgIzwy1SlT+Dp8FrPHMHoSj5GZJ56PP0z74fJJ8r2KJ8LSfpQpMUbUovmOrUnLzWM9vXpnw4PJHZFnvT+QXiLS/MzOgvU4NG0tgzyqq6r2BiFf0tzaqZ4j5/Ug3pD8OJ63qyp35zgrdqYBhWT5Z/guxXxU+sb48W9DEj3scsY47tV8ZPXH+HX3PmX7vN4i7EZpnQWvzZ9bPtDvMXIEpU7g2eV0TLtabwL30ySK6bxVpMTUI1L4i2a57hOJL7bAu9TeM9icILrSuG32PrRfa4+fgOrfyki8MzmnVQZgZ9LrxfUnsBvcvKUyvV41n1IC7V6/EE8s+LprMef5rtWi6mfcPbwwpkNW/2LpD28+G4YU/3WYw9/2wjfN/wefiOvM+g19PArVldDpVr8BpnWHN7iosAS+I1c/uBCy3/837H3P3zyhbeR+dJ7va18fv9Kyd8TcH8423GIb72Wlk/gN8o3qDxf+B0AU4Pp+qDEXL2z81JC4sMNzv7TIfFbeJ7DDH79Qmf0vd4Iv/bpG9/qmPR0pR+CQJp8qzVtqK/IDyZDKM00Y7X919zm0Y6SgLkQX4VuBqwdpEX54vMcYvpHTDEj/7ygCyqDGzH7pCfYUepfg8ZyH8qmvR4T+rbyL1K0NA0Lqg2vAAAAAElFTkSuQmCC"
      ></img>
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
