import styled from "styled-components";
import Icon from "@/components/common/Icon";
import type { AppNotification } from "@/services/notifications/types";
import { formatRelativeTime, notificationIcon } from "@/services/notifications/format";
import { typography } from "@/styles/typography";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.li``;

const Row = styled.button<{ $unread: boolean; $dark: boolean }>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border: ${({ theme, $dark }) => ($dark ? "1px solid #2a2a30" : theme.hairline)};
  border-radius: 18px;
  background: ${({ theme, $unread, $dark }) =>
    $dark ? ($unread ? "#221a33" : "#161619") : $unread ? theme.colors.primary50 : theme.colors.white};
  box-shadow: ${({ theme, $dark }) => ($dark ? "none" : theme.shadow.card)};
  color: ${({ theme, $dark }) => ($dark ? "#f4f4f5" : theme.colors.text900)};

  & .nl-text {
    color: ${({ theme, $dark }) => ($dark ? "#a1a1aa" : theme.colors.text700)};
  }
  text-align: left;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }
`;

const IconWrap = styled.span`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary100};
  color: ${({ theme }) => theme.colors.primary600};
`;

const Body = styled.span`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.span<{ $unread: boolean }>`
  ${typography.body2};
  font-weight: ${({ $unread }) => ($unread ? 700 : 600)};
  overflow-wrap: anywhere;
`;

const Text = styled.span`
  ${typography.caption};
  white-space: pre-line;
  overflow-wrap: anywhere;
`;

const Meta = styled.span`
  ${typography.caption};
  color: ${({ theme }) => theme.colors.outline};
`;

const Dot = styled.span`
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  margin-top: 6px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.error};
`;

interface Props {
  items: AppNotification[];
  onOpen: (n: AppNotification) => void;
  /** 관리자 화면(어두운 테마) */
  dark?: boolean;
}

/** 회원·관리자 알림함이 함께 쓰는 목록. 모르는 type 은 일반 알림 아이콘으로 그립니다. */
export default function NotificationList({ items, onOpen, dark = false }: Props) {
  return (
    <List>
      {items.map((n) => (
        <Item key={n.id}>
          <Row type="button" $dark={dark} $unread={!n.read} onClick={() => onOpen(n)}>
            <IconWrap>
              <Icon name={notificationIcon(n.type)} size={20} />
            </IconWrap>
            <Body>
              <Title $unread={!n.read}>{n.title || "알림"}</Title>
              {n.body && <Text className="nl-text">{n.body}</Text>}
              <Meta>{formatRelativeTime(n.createdAt)}</Meta>
            </Body>
            {!n.read && <Dot role="img" aria-label="읽지 않음" />}
          </Row>
        </Item>
      ))}
    </List>
  );
}
