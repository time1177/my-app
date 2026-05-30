import { useState } from "react";
import cantarella from "./assets/cantarella.webp";
import rococo from "./assets/rococo.webp";
import brant from "./assets/brant.webp";
import phoebe from "./assets/phoebe.webp";
import cartethyia from "./assets/cartethyia.webp";
import ciaccona from "./assets/ciaccona.webp";
import augusta from "./assets/augusta.webp";
import iuno from "./assets/iuno.webp";
import lupa from "./assets/lupa.webp";
import carlotta from "./assets/carlotta.webp";
import zani from "./assets/zani.webp";
import mornye from "./assets/mornye.webp";
import lucilla from "./assets/lucilla.webp";
import hiyuki from "./assets/hiyuki.webp";
import luuk from "./assets/luuk.webp";
import aemeath from "./assets/aemeath.webp";
import chisa from "./assets/chisa.webp";
import lynae from "./assets/lynae.webp";
import denia from "./assets/denia.webp";
import phrolova from "./assets/phrolova.webp";
import sigrika from "./assets/sigrika.webp";
import shorekeeper from "./assets/shorekeeper.webp";
import camellya from "./assets/camellya.webp";
import galbrena from "./assets/galbrena.webp";
import qiuyuan from "./assets/qiuyuan.webp";
import jinhsi from "./assets/jinhsi.webp";
import changli from "./assets/changli.webp";
import jiyan from "./assets/jiyan.webp";
import xiangliyao from "./assets/xiangliyao.webp";
import yinlin from "./assets/yinlin.webp";
import zhezhi from "./assets/zhezhi.webp";
const shine = `
@keyframes shine {
  0% {
    transform: translateX(-100%) rotate(25deg);
  }

  100% {
    transform: translateX(100%) rotate(25deg);
  }
}
`;
export default function App() {
  const [flipped, setFlipped] = useState({});
  const characters = [
{
  name: "칸타렐라",
  faction: "피살리아 가문",
  img: cantarella,
  element: "인멸",
  weapon: "증폭기",
  signatureWeapon: "바다의 속삭임",
  ability: "바닷속 환상",
  liberation: "해수면 밑",
},

{
  name: "로코코",
  faction: "우인 극단",
  img: rococo,
  element: "인멸",
  weapon: "권갑",
  signatureWeapon: "희비극",
  ability: "상자 속 펼쳐지는 무대",
  liberation: "즉흥 공연, 시작",
},

{
  name: "브렌트",
  faction: "우인 극단",
  img: brant,
  element: "용융",
  weapon: "직검",
  signatureWeapon: "흔들리지 않는 용기",
  ability: "불꽃 연극의 인도",
  liberation: "세상 끝까지",
},

{
  name: "페비",
  faction: "깊은 바다 수도회",
  img: phoebe,
  element: "회절",
  weapon: "증폭기",
  signatureWeapon: "광휘의 찬송가",
  ability: "신성한 빛의 기도",
  liberation: "샛별의 소원",
},

{
  name: "카르티시아",
  faction: "라군나",
  img: cartethyia,
  element: "기류",
  weapon: "직검",
  signatureWeapon: "숙명에 맞서는 관",
  ability: "폭풍우",
  liberation: "기사의 소원대로",
},

{
  name: "샤콘",
  faction: "라군나",
  img: ciaccona,
  element: "기류",
  weapon: "권총",
  signatureWeapon: "숲속의 아리아",
  ability: "멜로디로 그려진 시",
  liberation: "트리오의 카덴차",
},

{
  name: "아우구스타",
  faction: "일곱 언덕",
  img: augusta,
  element: "전도",
  weapon: "대검",
  signatureWeapon: "천둥벼락을 다스리는 권능",
  ability: "떠오르지 않은 태양의 자기장",
  liberation: "태양의 정벌",
},

{
  name: "유노",
  faction: "일곱 언덕",
  img: iuno,
  element: "기류",
  weapon: "권갑",
  signatureWeapon: "세상 만물의 진리",
  ability: "고요한 멈춤, 되풀이되는 순환, 그리고 새로운 변화",
  liberation: "추락한 달의 바다",
},

{
  name: "루파",
  faction: "일곱 언덕",
  img: lupa,
  element: "용융",
  weapon: "대검",
  signatureWeapon: "불길",
  ability: "이글거리는 포효",
  liberation: "영광이 그려내는 불꽃의 단꿈",
},

{
  name: "카를로타",
  faction: "몬텔리 가문",
  img: carlotta,
  element: "응결",
  weapon: "권총",
  signatureWeapon: "죽음과 춤",
  ability: "시각 재구성",
  liberation: "새로운 트렌드",
},

{
  name: "젠니",
  faction: "몬텔리 가문",
  img: zani,
  element: "회절",
  weapon: "권갑",
  signatureWeapon: "불빛의 심판",
  ability: "불사른 흔적",
  liberation: "명암 경계선이 바뀔 무렵",
},

{
  name: "모니에",
  faction: "스페이스트렉 콜렉티브",
  img: mornye,
  element: "용융",
  weapon: "대검",
  signatureWeapon: "별하늘 연산 측정기",
  ability: "별자리 구축",
  liberation: "임계 프로토콜",
},

{
  name: "루실라",
  faction: "스페이스트렉 콜렉티브",
  img: lucilla,
  element: "응결",
  weapon: "증폭기",
  signatureWeapon: "프리즈 프레임",
  ability: "기억 궁전",
  liberation: "생생한 기억",
},

{
  name: "히유키",
  faction: "타오르는 벚꽃의 무녀",
  img: hiyuki,
  element: "응결",
  weapon: "직검",
  signatureWeapon: "서린 불꽃",
  ability: "선견력",
  liberation: "끌어온 내 가능성",
},

{
  name: "루크 헤르센",
  faction: "스타토치 아카데미",
  img: luuk,
  element: "회절",
  weapon: "권갑",
  signatureWeapon: "한낮의 의지",
  ability: "상전이",
  liberation: "얼음 속의 의미",
},

{
  name: "에이메스",
  faction: "스타토치 아카데미",
  img: aemeath,
  element: "용융",
  weapon: "직검",
  signatureWeapon: "영원한 샛별",
  ability: "긴 비행의 별빛",
  liberation: "샛별을 향한 비행",
},

{
  name: "쿠치바 치사",
  faction: "스타토치 아카데미",
  img: chisa,
  element: "인멸",
  weapon: "대검",
  signatureWeapon: "쿠모키리",
  ability: "해답의 눈빛",
  liberation: "즉시 · 초기화",
},

{
  name: "린네",
  faction: "스타토치 아카데미",
  img: lynae,
  element: "회절",
  weapon: "권총",
  signatureWeapon: "스펙트럼 BLaster",
  ability: "찬란한 스펙트럼",
  liberation: "컬러 스프레이 폭발",
},

{
  name: "데니아",
  faction: "잔성회",
  img: denia,
  element: "용융",
  weapon: "증폭기",
  signatureWeapon: "위조된 작은별",
  ability: "허무의 거품",
  liberation: "막이 내리는 순간",
},

{
  name: "플로로",
  faction: "잔성회",
  img: phrolova,
  element: "인멸",
  weapon: "증폭기",
  signatureWeapon: "잊혀진 피안의 슬픈 악장",
  ability: "뒤얽힌 세계의 교향곡",
  liberation: "잊혀진 심연의 왈츠",
},

{
  name: "시그리카",
  faction: "로야족",
  img: sigrika,
  element: "기류",
  weapon: "권갑",
  signatureWeapon: "솔스윈의 해석",
  ability: "함의 재현",
  liberation: "바라던 대로!",
},

{
  name: "파수인",
  faction: "검은 해안",
  img: shorekeeper,
  element: "회절",
  weapon: "증폭기",
  signatureWeapon: "뭇별의 교향곡",
  ability: "울림의 감촉",
  liberation: "결말의 순환",
},

{
  name: "카멜리아",
  faction: "검은 해안",
  img: camellya,
  element: "인멸",
  weapon: "직검",
  signatureWeapon: "날카로운 봄",
  ability: "피어나는 붉은 동백꽃",
  liberation: "아름다운 결말",
},

{
  name: "갈브레나",
  faction: "검은 해안",
  img: galbrena,
  element: "용융",
  weapon: "권총",
  signatureWeapon: "얽혀진 빛과 그림자",
  ability: "연옥",
  liberation: "연옥 정화",
},

{
  name: "구원",
  faction: "명정",
  img: qiuyuan,
  element: "기류",
  weapon: "직검",
  signatureWeapon: "푸른 의지",
  ability: "푸르름 속에 숨겨진 칼날",
  liberation: "진중 한 수",
},

{
  name: "금희",
  faction: "금주",
  img: jinhsi,
  element: "회절",
  weapon: "대검",
  signatureWeapon: "태평성대",
  ability: "겨울의 끝에 오는 봄",
  liberation: "만물의 정화",
},

{
  name: "장리",
  faction: "금주",
  img: changli,
  element: "용융",
  weapon: "직검",
  signatureWeapon: "솟아오르는 화염",
  ability: "붉은 이화",
  liberation: "이화의 충성심",
},

{
  name: "기염",
  faction: "금주",
  img: jiyan,
  element: "기류",
  weapon: "대검",
  signatureWeapon: "천룡의 천장",
  ability: "바람의 질주",
  liberation: "승천하는 청룡·결정",
},

{
  name: "상리요",
  faction: "금주",
  img: xiangliyao,
  element: "전도",
  weapon: "권갑",
  signatureWeapon: "팔방의 천추",
  ability: "만상의 진리",
  liberation: "사고의 배열",
},

{
  name: "음림",
  faction: "금주",
  img: yinlin,
  element: "전도",
  weapon: "증폭기",
  signatureWeapon: "꼭두각시의 손",
  ability: "악을 처단하는 인형",
  liberation: "파천의 뇌격",
},

{
  name: "절지",
  faction: "금주",
  img: zhezhi,
  element: "응결",
  weapon: "증폭기",
  signatureWeapon: "옥수 비단",
  ability: "춤추는 붓끝",
  liberation: "상상과 현실",
},
];
return (
   <>
    <style>{shine}</style>
  <div
    style={{
      padding: 20,
      background: "#111",
      minHeight: "100vh",
    }}
  >
    <h1
      style={{
        color: "white",
        textAlign: "center",
        marginBottom: 30,
      }}
    >
      명조 캐릭터 도감
    </h1>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 20,
      }}
    >
      {characters.map((c, i) => (
        <div
          key={i}
          onClick={() =>
            setFlipped((prev) => ({
              ...prev,
              [i]: !prev[i],
            }))
          }
          style={{
            perspective: "1000px",
            cursor: "pointer",
            height: "360px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              transformStyle: "preserve-3d",
              transition: "transform 0.8s",
              transform: flipped[i]
                ? "rotateY(180deg)"
                : "rotateY(0deg)",
            }}
          >
                      {/* 앞면 */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",

                borderRadius: 20,
                overflow: "hidden",

                background: `
                  linear-gradient(
                    135deg,
                    rgba(255,0,255,0.15),
                    rgba(0,255,255,0.15),
                    rgba(255,255,0,0.15)
                  ),
                  #1e1e1e
                `,

                border: "1px solid rgba(255,255,255,0.2)",

                boxShadow: `
                  0 0 10px rgba(255,255,255,0.1),
                  0 0 20px rgba(0,255,255,0.1),
                  0 0 30px rgba(255,0,255,0.1)
                `,
              }}
            >
              {/* 프리즘 광택 */}
              <div
                style={{
                  position: "absolute",
                  top: "-100%",
                  left: "-100%",
                  width: "250%",
                  height: "250%",
                  background:
                    "linear-gradient(45deg, transparent, rgba(255,255,255,0.12), transparent)",
                  transform: "rotate(25deg)",
                  pointerEvents: "none",
                  animation: "shine 4s linear infinite",
                }}
              />

              <img
                src={c.img}
                alt={c.name}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  padding: 12,
                  color: "white",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    opacity: 0.7,
                  }}
                >
                  {c.faction}
                </div>

                <div
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginTop: 4,
                  }}
                >
                  {c.name}
                </div>
              </div>
            </div>
                        {/* 뒷면 */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",

                borderRadius: 20,

               background:
  "linear-gradient(135deg, rgba(255,0,255,0.15), rgba(0,255,255,0.15), rgba(255,255,0,0.15)), linear-gradient(135deg, #232526, #414345)",

                color: "white",

                padding: 15,

                boxSizing: "border-box",

                overflowX: "hidden",
overflowY: "hidden",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div
  style={{
    position: "absolute",
    top: "-100%",
    left: "-100%",
    width: "250%",
    height: "250%",
    background:
      "linear-gradient(45deg, transparent, rgba(255,255,255,0.12), transparent)",
    transform: "rotate(25deg)",
    pointerEvents: "none",
    animation: "shine 4s linear infinite",
  }}
/>
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: 12,
                }}
              >
                {c.name}
              </h2>

              <p>
                <strong>속성</strong>
                <br />
                {c.element}
              </p>

              <p>
                <strong>무기</strong>
                <br />
                {c.weapon}
              </p>

              <p>
                <strong>전용 무기</strong>
                <br />
                {c.signatureWeapon}
              </p>

              <hr
                style={{
                  border: 0,
                  borderTop:
                    "1px solid rgba(255,255,255,0.15)",
                }}
              />

              <p>
                <strong>공명 어빌리티</strong>
                <br />
                {c.ability}
              </p>

              <p>
                <strong>공명 해방</strong>
                <br />
                {c.liberation}
              </p>
            </div>
                      </div>
        </div>
      ))}
    </div>
  </div>
   </>
);
}