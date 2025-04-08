interface FormField {    
    label: string; // 필드명
    key: string; // 상태 관리용 키
    position : [number, number]
    span?: { row: number, col: number; }; // ✅ 셀 병합을 위한 span 정보
    component: React.ReactNode; // ✅ 커스텀 컴포넌트 가능

    isRequired?: boolean; // 필수 여부
    requiredMessage?: string; // 필수 메시지
    toolTip?: string; // 툴팁
    style?: React.CSSProperties; // 스타일 지정

    disabled?: boolean; // 비활성화 여부
    isReadOnly?: boolean; // 읽기 전용 여부

    defaultValue? : string | number | object; // 기본값

    // ✅ 추가
    validate?: (value: any) => string | undefined; // 에러 메시지 반환
    filter? : (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export type {FormField}