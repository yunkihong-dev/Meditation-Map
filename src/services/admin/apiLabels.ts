/**
 * API 주소를 사람이 읽는 이름으로 옮깁니다.
 *
 * 관리자 화면을 보는 사람은 개발자가 아닙니다. `/places/{id}` 같은 주소는
 * 무엇을 세는 숫자인지 알려주지 못합니다. "명상지 상세 보기" 라고 적혀 있어야
 * 어제보다 늘었다는 게 무슨 뜻인지 읽힙니다.
 *
 * 주소는 서버에서 이미 정규화되어 들어옵니다(숫자·UUID 자리는 `{id}`).
 */

/** 주소 그대로 일치하는 경우 */
const EXACT: Record<string, string> = {
  "/": "첫 화면",

  // 둘러보기
  "/places": "명상지·센터 목록",
  "/places/{id}": "명상지 상세 보기",
  "/regions": "지역 목록",
  "/experts": "전문가 목록",
  "/experts/{id}": "전문가 상세 보기",
  "/interests": "관심사 목록",
  "/banners": "홈 광고 배너",
  "/notices": "공지 목록",
  "/notices/{id}": "공지 상세 보기",

  // 계정
  "/auth/login": "로그인",
  "/auth/logout": "로그아웃",
  "/auth/register": "회원가입",
  "/auth/register/oauth": "소셜 회원가입",
  "/auth/email/availability": "이메일 중복 확인",
  "/auth/phone/signup/send-otp": "인증번호 발송",
  "/auth/phone/signup/verify-otp": "인증번호 확인",

  // 내 정보
  "/me": "내 정보 조회",
  "/me/profile": "프로필 수정",
  "/me/profile-image": "프로필 사진 변경",
  "/me/favorites": "찜 목록",
  "/me/expert-profile": "전문가 프로필",

  // 기타
  "/inquiries": "1:1 문의 접수",
  "/storage/objects": "이미지 업로드",

  // 관리자
  "/admin/auth/login": "관리자 로그인",
  "/admin/auth/logout": "관리자 로그아웃",
  "/admin/auth/me": "관리자 정보 확인",
  "/admin/places": "[관리] 명상지 목록·등록",
  "/admin/places/{id}": "[관리] 명상지 수정·삭제",
  "/admin/experts": "[관리] 전문가 목록·등록",
  "/admin/experts/{id}": "[관리] 전문가 수정·삭제",
  "/admin/experts/accounts": "[관리] 전문가 계정 발급",
  "/admin/experts/login-id-availability": "[관리] 전문가 아이디 확인",
  "/admin/notices": "[관리] 공지 목록·등록",
  "/admin/notices/{id}": "[관리] 공지 수정·삭제",
  "/admin/banners": "[관리] 광고 배너 목록·등록",
  "/admin/banners/{id}": "[관리] 광고 배너 수정·삭제",
  "/admin/interests": "[관리] 관심사 목록·등록",
  "/admin/interests/{id}": "[관리] 관심사 수정·삭제",
  "/admin/metrics/traffic": "[관리] 대시보드 집계",
  "/admin/metrics/http-traffic": "[관리] 요청 추이",
  "/admin/metrics/member-traffic": "[관리] 회원 추이",
  "/admin/metrics/api-traffic": "[관리] API별 추이",
};

/** 표에 없는 주소를 위한 대략적인 갈래 */
const PREFIX: { prefix: string; label: string }[] = [
  { prefix: "/admin/", label: "[관리] 기타" },
  { prefix: "/auth/", label: "계정 기타" },
  { prefix: "/me/", label: "내 정보 기타" },
];

/**
 * 화면에 띄울 이름. 모르는 주소는 주소 그대로 돌려줍니다 —
 * 새 API 가 생겼을 때 "기타" 로 뭉뚱그려 감추는 것보다 눈에 띄는 편이 낫습니다.
 */
export function apiLabel(uri: string): string {
  const hit = EXACT[uri];
  if (hit) return hit;

  const prefixed = PREFIX.find((p) => uri.startsWith(p.prefix));
  if (prefixed) return `${prefixed.label} (${uri})`;

  return uri;
}

/** 목록에 함께 보여 줄 "이름 + 주소". 이름만 있으면 개발자가 확인할 길이 없습니다. */
export function apiLabelWithUri(uri: string): string {
  const label = apiLabel(uri);
  return label === uri ? uri : `${label}  ·  ${uri}`;
}
