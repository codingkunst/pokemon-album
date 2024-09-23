# 🌌 포켓몬 도감

poke api를 사용한 포켓몬스터 도감 프로젝트

## 🛠 Skill
![Skills](https://skillicons.dev/icons?i=react,vite,yarn,emotion)

## 🚀 API
- 포켓몬 목록을 가져오는 api
  - https://pokeapi.co/api/v2/pokemon
- 포켓몬 상세 정보를 가져오는 api
  - https://pokeapi.co/api/v2/pokemon/${name}
- 포켓몬 한글 이름을 가져오는 api
  - https://pokeapi.co/api/v2/pokemon-species/${name}

## 트러블슈팅
- Cannot destructure property 'basename' of 'React2.useContext(...)' as it is null
- react router dom Link 태그 사용시 해당 컴포넌트가 BrowserRouter 안에 있어야함
- Cannot read properties of null (reading 'results')
- 옵셔널 체이닝 연산자 사용해서 해결
- The requested module '/src/axios/api.js' does not provide an export named 'default'
-  Cannot read properties of undefined (reading 'toString')

## install package
`yarn add @emotion/styled`
`yarn add @emotion/react`
`yarn add react-router-dom`
`yarn add axios`
`yarn add react-infinite-scroll-hook`

## 📄 Git Commit Convention
| 태그 이름 | 설명 |
| --- | --- |
| Feat | 새로운 기능을 추가할 경우 |
| Fix | 버그를 고친 경우 |
| Design | CSS 등 사용자 UI 디자인 변경 |
| !BREAKING CHANGE | 커다란 API 변경의 경우 |
| !HOTFIX | 급하게 치명적인 버그를 고쳐야하는 경우 |
| Style | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| Refactor | 프로덕션 코드 리팩토링 |
| Comment | 필요한 주석 추가 및 변경 |
| Docs | 문서를 수정한 경우 |
| Test | 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X) |
| Chore | 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X) |
| Rename | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 |
| Remove | 파일을 삭제하는 작업만 수행한 경우 |