## Project Setup

<table>
  <tr>
    <th>Name</th>
    <th>Version</th>
    <th>비고</th>
  </tr>
  <tr>
    <td>Node.js</td>
    <td>18.16.0</td>
    <td></td>
  </tr>
  <!-- <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr> -->
</table>

### yarn ac 파일명

git add 와 commit 한번에 하기

.gitvscode로 커밋내용 저장하는 거면

yarn ac 파일명

git add 파일명 이 실행되고
git commit 이 실행되어
.gitvscode이 열려서 평소처럼 저장하고 닫으면 commit!

yarn ac만 쓰면 git add .과 같음

### yarn dev

기존의 yarn dev시 yarn vite가 실행되어 로컬에서 서버가 열림.

tailwindcss를 적용하려면

```
npx tailwindcss -i ./src/index.css -o ./src/output.css --watch
```

를 통해서 tailwind css에서 사용되는 클래스를 output.css에 적용해야함

concurrently를 활용하여 둘 다 yarn dev로 실행되게 추가했음

### head0 ~ head3

git reset --hard HEAD

0이면 HEAD, 1이면 HEAD1

### yarn build

tailwindcss 적용까지 하는 구문

### output.css는 gitignore 하였음

순서가 자꾸 바뀌기에 conflict가 자주 남

yarn dev로 통일하였으니 괜찮음
