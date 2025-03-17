<div align="center">
  <br>
  <img src="https://github.com/user-attachments/assets/c220db6c-d708-40e3-ab78-163860e060f6">
</div>


<br>
<br>


#  <img src="https://github.com/user-attachments/assets/91f46dee-ff6a-4158-b5e6-20f1cd83ec5d" width="28"> DORAN.GG
> 배포 주소 : https://next-riot-app-three.vercel.app/

<br>
<br>

## 💬 프로젝트 소개

> 📅 개발 기간 : 2025. 03. 10 ~ 2025. 03. 17 (총 8일)
> <br><br>
> **League Of Legends의 간단한 정보 조회를 목적으로 하는 Next.js 기반 웹 애플리케이션입니다.**
> <br>
> <br> Riot Games API를 활용하여 매주 변경되는 리그 오브 레전드(LoL)의 로테이션 챔피언 목록을 조회할 수 있습니다.
> <br> PC와 모바일 환경 모두에 최적화된 반응형 디자인을 적용하였습니다.

<br>
<br>


## 📑 페이지 구성
| **1. 메인 화면**                                     |
| :------------------------------------------------------------------: | 
| <img src="https://github.com/user-attachments/assets/eef3fddc-2b70-4929-ac7b-d04d01af24d5" alt="메인 화면" /> 
| **2. 챔피언 전체 목록 페이지**                               | 
| <img src="https://github.com/user-attachments/assets/bc7c9174-1c92-41ac-8f35-b945547dcc5b" alt="챔피언 전체 목록 페이지" />   |
| **3. 챔피언 로테이션 목록 페이지**                               | 
| <img src="https://github.com/user-attachments/assets/425f6381-01d2-4943-8921-9a0c98e2db3e" alt="챔피언 로테이션 목록 페이지" />   |
| **4. 챔피언 상세 페이지**                               | 
| <img src="https://github.com/user-attachments/assets/0ebd7e81-1576-450b-8e06-be5c886b23f8" alt="챔피언 상세 페이지" />   |
| **5. 아이템 목록 페이지**                               | 
| <img src="https://github.com/user-attachments/assets/3d396fc5-522d-4a7a-865a-5e44eb28638d" alt="아이템 목록 페이지" />   |



<br>
<br>

## ⚙ 프로젝트 기능 소개

- **Next.js 프레임워크**로 구성된 프로젝트입니다.
- Riot Games API를 활용하여 리그 오브 레전드의 게임 정보를 다양한 렌더링 방식(SSG, SSR, CSR, ISR)으로 구현합니다.
- **TanStack Query**를 사용하여 비동기 데이터 요청 및 캐싱 기능으로 서버 데이터를 효율적으로 관리합니다.
- **Tailwind CSS**를 사용하여 반응형 디자인을 적용하고, **App Router**을 이용해 페이지 간 네비게이션을 처리합니다.
- **Fetch API**를 활용하여 네이티브 브라우저 기능을 사용한 가벼운 네트워크 요청을 처리하고, 별도의 라이브러리 없이 간편하게 데이터 가져오기를 구현합니다.


<br>
<br>

## 🚀 프로젝트 회고

- ### [[트러블 슈팅] metadata와 'use client'가 충돌했다 💥](https://velog.io/@jiyunk/metadata와-use-client가-충돌했다)
- ### [[회고] map()과 filter()를 함께 사용할 때 중첩 배열이 생긴다면?](https://velog.io/@jiyunk/map과-filter를-함께-사용할-때-중첩-배열이-생긴다면)
- ### [[회고] Next.js + TanStack Query로 API 데이터를 관리하는 법 제대로 이해하기](https://velog.io/@jiyunk/Next.js-TanStack-Query로-API-데이터를-관리하는-법-제대로-이해하기)
<br>
<br>

## 📁 프로젝트 구조
```markdown
my-riot-app
├─ public
├─ src
│  ├─ app
│  │  ├─ api
│  │  │  └─ rotation/route.ts  # Riot API 데이터를 가져오는 API Route
│  │  ├─ champions/            # 챔피언 관련 페이지
│  │  │  └─ [id]/page.tsx      # 개별 챔피언 상세 페이지
│  │  ├─ items/                # 아이템 관련 페이지
│  │  ├─ rotation/             # 로테이션 챔피언 페이지
│  │  ├─ global-error.tsx      # 전체 애플리케이션 에러 핸들링
│  │  ├─ layout.tsx            # 전체 페이지 레이아웃
│  │  ├─ loading.tsx           # 로딩 UI
│  │  ├─ page.tsx              # 메인 페이지
│  │  ├─ providers.tsx         # 앱 전역 컨텍스트 제공
│  ├─ components/              # UI 컴포넌트 모음
│  ├─ constants.ts             # 상수 값 정의 (예: API URL)
│  ├─ styles/                  # 스타일 관련 파일
│  │  ├─ fonts/                # 폰트 파일
│  │  ├─ globals.css           # 전역 스타일
│  │  └─ loader.css            # 로딩 애니메이션 스타일
│  ├─ types/                   # 타입 정의 파일
│  │  ├─ Champion.ts           # 챔피언 데이터 타입
│  │  └─ Items.ts              # 아이템 데이터 타입
│  └─ utils/                   # 유틸리티 함수
└─
```

<br>
<br>

## 🧶 기술 스택
<div align="left">

### Environment
<img src="https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=https://upload.wikimedia.org/wikipedia/commons/a/a7/Visual_Studio_Code_1.35_icon.svg&logoColor=white" />
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
<br>

### Development
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Tanstackquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"> 
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&amp;logo=Tailwind CSS&amp;logoColor=white">


</div>
