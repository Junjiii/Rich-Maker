# Rich-Maker

## 💻 개발 기간
23.09.03 ~ 23.09.22
## 🧑‍🤝‍🧑 멤버 구성
- 김민재 : ERD모델링, 메인페이지, 마이데이터, 인증서버 구현 
- 최지준 : ERD모델링, 초기세팅 , 유닛테스트
- 김만규 : 로그인 API, 마이페이지 
- 권영경 : ERD모델링, 공동관리 페이지 
## 🚀서비스 소개
 
 #### 서비스 개요
 설명 : 본 웹 서비스는 구성원에게 할당된 예산을 정리하고 구성원 내 사용처를 함께 공유하는데 그 목적이 있습니다.
 고객 및 비지니스 :  금융 교육 개선 / 가족 재정 건강 개선 / 사용자 증가 / 수익모델 구축 
 최종 목표 : 구성원의 금융 건강을 향상시키는 동시에 사용자가 예산 편성 및 금융 계획을 더 명확하게 이해하도록 돕는 완전히 기능하는 핀테크 서비스를 개발하고 출시하는 것입니다. 
 
 #### 핵심 기능
 로그인 
 - 마이데이터를 통한 본인인증
 - pre signin / signin / signup  3가지로 분류

 메인페이지
 - 정렬, 필터링, 페이징 구현
 - 소비 지출 내역에 따른 총 금액
 - 그래프 시각화

 마이페이지
 -  amazon s3 를 사용해 프로필 이미지 관리 
 - 회원 정보 수정

금융 정보 불러오기 
- 마이데이터에 고객 명의 계좌 / 카드 전체 불러오기
- 선택한 계좌 / 카드 사용 내역 불러오기
- DB에 저장 
   
공동관리 페이지 
- 구성원 추가
- 구성원 공유 계좌 및 카드 

<br />
 
## ⚙️ 기술 스택
### Frontend
[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1693791891735?alt=media&token=f38ca43a-35de-42fa-8e02-e0b4b0e5efa4)](https://github.com/msdio/stackticon)
### Backend
[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1693791755671?alt=media&token=2c2c08b5-ef79-4a5a-aa73-582b6c581acf)](https://github.com/msdio/stackticon)
### common
* common : <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">
* 협업툴 : <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"> <img src="https://img.shields.io/badge/trello-0052CC?style=for-the-badge&logo=trello&logoColor=white"> <img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white">
<br />

## 📌 구현 기능
### Login
<img width="470" alt="스크린샷 2023-10-18 오전 10 50 26" src="https://github.com/Junjiii/coding_test/assets/138355289/dda75cb0-f062-4673-9aaf-763a20597e50">

![스크린샷 2024-01-09 오후 11 08 01](https://github.com/Junjiii/coding_test/assets/138355289/b0b90074-2d09-4242-a729-3f94e0708a18)

[FE] : 실시간 유효성 검사를 통해, 사용자들이 잘못 기입하여 발생할 수 있는 에러를 미연에 방지하였습니다. 인증이 완료된 사용자가 페이지 이동시 매번 로그인하는 수고를 덜 수 있도록, Local Stroage에 토큰을 저장하는 방식 적용하였습니다.

<br>

[BE] : email,password 값이 일치하는 회원정보 제공, 로그인시 JWT(Json Web Token) 발급

<br>


### Sign Up


[FE] : 비밀번호 8~15자, 올바른 email 형식, 모든 필수 동의 항목 3가지가 모두 충족할때 회원가입 버튼 활성화되도록 하였습니다. 선택 약관 동의 체크여부를 boolean 값으로 저장하여 POST 요청하였습니다. 신발사이즈 선택 모달창 구현했습니다.

<br>

[BE] : email 형식이 올바르고, 비밀번호 길이가 8~15 일때 회원가입 가능, 비밀번호 암호화

<br>


### Sorting
![SREAM-리스트 정렬](https://github.com/wecode-bootcamp-korea/48-2nd-F_Kiiler-frontend/assets/126768997/9df6edd3-f992-4aeb-9fa8-98c773251708)


[FE] : 쿼리스트링을 활용하여 상품 목록을 낮은 가격순과 높은 가격순으로 정렬하는 기능을 구현했습니다.

<br>

[BE] : 페이지 들어올시 가격이 오름차순으로 정렬, 높은 가격순 선택시 내림차순 정렬

<br>



### Filtering, Pagination


[FE] : 사용자가 원하는 신발 브랜드와 종류 카테고리를 선택하면, 이를 쿼리스트링을 통해 서버로 전달하여 해당 조건에 맞는 상품 목록을 필터링하고, 페이지네이션을 통해 상품을 8개씩 보여주씩 보여지도록 기능을 구현했습니다. 

<br>

[BE] : queyry builder 이용하여 브랜드와 신발 카테고리로 필터 기능, 8개씩 보여주는 paging 설정

<br>


### Product Detail
![SREAM-상세페이지](https://github.com/wecode-bootcamp-korea/48-2nd-F_Kiiler-frontend/assets/126768997/2656b684-bee4-4104-ac49-330dec945e00)


[FE] : 사용자가 선택한 신발 사이즈별로 최근 거래 가격과와 즉시 구매 및 판매 가격을 조회할 수 있도록 하였습니다. 회원들의 거래 내역을 사이즈별 구매 입찰가, 판매 입찰가, 체결 날짜, 수량 등의 정보로 정리하여 표 형태로 조회할 수 있게 하였습니다. 체결 내역표는 로그인을 한 유저만 볼 수 있도록 하여 회원 유입을 유도했습니다.

<br>

[BE] : 각 제품의 모든 사이즈 구매가와 판매가중 낮은 가격 보이게 설정, 체결 거래, 판매 입찰 수량, 구매 입찰 수량 제공 함

<br>


### Purchase & Payment
![SREAM-즉시구매](https://github.com/wecode-bootcamp-korea/48-2nd-F_Kiiler-frontend/assets/126768997/c5ca3bef-f4af-4ccb-97ea-be0edfaec48b)

[FE] : 해당 상품의 사이즈를 선택하면, 제품의 즉시구매와 구매입찰 컴포넌트가 토글버튼으로 각각 보여지며, 즉시구매에서는 백엔드로부터 받아온 상품데이터의 가격을 저장하여 즉시구매하기 버튼을 누를 때 페이지 이동과 함께 가격데이터를 전송하였습니다. 결제에서는 유저의 포인트를 받아와서 사용 포인트를 입력하면 상품 금액에서 차감하여 나머지 금액을 저장하고 결제하기 버튼을 누르면 모달창에 유저의 구매 데이터를 보여주고 홈화면으로 이동하도록 하였습니다.

<br>

[BE] : 제품의 판매,구매 버튼의 각 사이즈 별 가격을 나타내고 클릭 하엿을때 즉시 구매와 구매 입찰을 하면, 포인트를 사용하여 결제를 하게 만들었습니다. 만일 뒤로 가기 버튼을 눌렀을때 결제가 진행 되지 않게 만들어 주었습니다. 

<br>


### Sell & Payment
![SREAM-판매입찰](https://github.com/wecode-bootcamp-korea/48-2nd-F_Kiiler-frontend/assets/126768997/594b2938-1bfd-47aa-8793-679b0fe108ab)


[FE] : 해당 상품의 사이즈를 선택하면, 제품의 즉시판매와 판매입찰 컴포넌트가 토글버튼으로 각각 보여지며, 판매입찰에서는 유저가 입력한 금액을 판매입찰하기 버튼을 누를 때 페이지 이동과 함께 가격데이터를 전송하였습니다. 결제에서는 유저의 포인트를 받아와서 사용 포인트를 입력하면 상품 금액에서 차감하여 나머지 금액을 저장하고 결제하기 버튼을 누르면 모달창에 유저의 구매 데이터를 보여주고 홈화면으로 이동하도록 하였습니다.

<br>

[BE] :제품의 판매,구매 버튼의 각 사이즈 별 가격을 나타내고 클릭 하엿을때 즉시 판매와 판매 입찰을 하면, 포인트를 사용하여 결제를 하게 만들었습니다. 만일 뒤로 가기 버튼을 눌렀을때 결제가 진행 되지 않게 만들어 주었습니다. 

