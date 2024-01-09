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
 <br />
 고객 및 비지니스 :  금융 교육 개선 / 가족 재정 건강 개선 / 사용자 증가 / 수익모델 구축 
 <br />
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
<br>

pre-signin / signin / signup 3가지 과정으로 나누어 유저의 입장에서 가입여부를 서비스에서 확인하여 고민을 줄였고 자연스럽게 회원가입을 유도할 수 있게 했다.
<br>
마이데이터로 요청을 보내어 핸드폰 번호 본인인증 과정을 거치고 나서 핸드폰 번호를 ID로서 사용하게 된다. 


<br>

### 금융 추가 
![스크린샷 2024-01-09 오후 11 22 33](https://github.com/Junjiii/coding_test/assets/138355289/1556aded-71c5-4bea-a49d-ea072d5e25ef)
![스크린샷 2024-01-09 오후 11 22 40](https://github.com/Junjiii/coding_test/assets/138355289/d30539bc-76e5-4187-ac18-f58a7a5644be)
<br>

유저 명의로 되어있는 계좌 혹은 카드 종류를 마이데이터에 요청하여 암복호화를 통해 데이터 이동시 보안을 강화하였고 고객에게 보여준다. 
<br>
이후 유저가 선택한 계좌 및 카드의 사용내역을 불러와 데이터베이스에 저장한다. 

<br>

### 메인 페이지 
![스크린샷 2024-01-09 오후 11 23 41](https://github.com/Junjiii/coding_test/assets/138355289/2c157b1b-f481-462d-8489-71ebc2963b28)

제일 자주 확인하는 총 지출을 상단에 배치함으로서 시야의 편안함을 의도했다. 
<br>
또한 글자뿐만 아니라 그래프로 시각화하여 한층 더 본인의 소비패턴을 쉽게 확인할 수 있다. 
<br>

### 마이페이지 
![스크린샷 2024-01-09 오후 11 24 34](https://github.com/Junjiii/coding_test/assets/138355289/fe50e27d-33f5-4bc9-901b-60bc501e7515)
<br>
Amaxon S3 를 통해 이미지를 관리했고 마이페이지를 새로운 페이지로서 분리시켜 깔끔한 UI와 펭피지의 역할을 명확하게 하였다. 
<br>

### 공동 금융 추가 및 관리 페이지 
![스크린샷 2024-01-09 오후 11 25 16](https://github.com/Junjiii/coding_test/assets/138355289/16b8ee29-bb86-428a-bb45-e30cb0fdeb3f)
<br>
공동으로 관리하고자 하는 계좌 및 카드를 지정하고 공동 페이지에서 구성원끼리 소비내역을 확인할 수 있다. 
<br>
### 공동 관리 구성원 추가 
![스크린샷 2024-01-09 오후 11 26 01](https://github.com/Junjiii/coding_test/assets/138355289/bb2c9a9e-f53b-402e-80fc-678627a1fd7e)
<br>

공동관리를 하고 싶은 구성원을 추가할 수 있고 권한을 가진 유저는 구성원을 삭제가 가능하다. 



