import { validateInviteForm } from './invite_form';

describe('청첩장 정보 입력값 유효성 검사', () => {
  it('모든 필수 정보가 입력되면 유효', () => {
    const result = validateInviteForm({
      groom: '홍길동',
      bride: '김영희',
      date: '2024-07-01',
      time: '12:00',
      venue: '서울웨딩홀',
      address: '서울시 강남구',
      message: '축하해주세요!',
      phone: '010-1234-5678',
      template_id: 'tpl-1'
    });
    expect(result.valid).toBe(true);
  });

  it('필수 정보가 하나라도 빠지면 유효하지 않음', () => {
    const result = validateInviteForm({
      groom: '',
      bride: '김영희',
      date: '2024-07-01',
      time: '12:00',
      venue: '서울웨딩홀',
      address: '서울시 강남구',
      message: '축하해주세요!',
      phone: '010-1234-5678',
      template_id: 'tpl-1'
    });
    expect(result.valid).toBe(false);
    expect(result.error).toBe('모든 필수 정보를 입력하세요.');
  });
}); 