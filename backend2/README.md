# backend2의 문제점들
1. 테스트를 위한 Bakcend 클래스 호출 시 동일한 포트를 열기 때문에 문제가 생긴다.

 >>- test 상태일 경우 개발 서버를 끄는 경우가 생긴다.
 >>- bin 파일에 있는 .test.js로 인해 .ts, .js두 경우다 테스트가 진행된다.
 >>- 결국에는 앱의 포트를 여는 코드는 server.ts에서 작성하는게 좋을 것 같다.

2. typeorm과 jest를 사용하기위해서 너무많은 babel 플러그인을 사용해야한다.

3. 라우터 하나를 만들면 컨트롤러를 만들고 provider을 수동으로 만드는 것은 문제가 있다고 본다.
 >>- 쉽게 관리할 수 있는 방법이 필요하다.
4. express middleware 함수의 인자의 코드가 너무 길며 줄일 방법을 찾을 필요가 있다.
