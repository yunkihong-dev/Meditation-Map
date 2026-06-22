import { useMemo, useState } from "react";
import styled from "styled-components";
import { formatProgramPeriod, todayKstIso } from "@/services/meditation/placeProgramStatus";

const Shell = styled.div`
  display: inline-block;
  max-width: 100%;
`;

const CalendarCard = styled.div`
  width: 252px;
  max-width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #3f3f46;
  background: #09090b;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const MonthLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #f4f4f5;
`;

const NavBtn = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 6px;
  background: #27272a;
  color: #e4e4e7;
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 16px;
  line-height: 1;

  &:hover {
    background: #3f3f46;
  }
`;

const WeekRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 4px;
`;

const WeekDay = styled.span`
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  color: #71717a;
  padding: 2px 0;
`;

const DayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`;

const DayBtn = styled.button<{
  $muted?: boolean;
  $inRange?: boolean;
  $rangeStart?: boolean;
  $rangeEnd?: boolean;
  $today?: boolean;
}>`
  height: 30px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  color: ${({ $muted }) => ($muted ? "#52525b" : "#f4f4f5")};
  background: ${({ $inRange, $rangeStart, $rangeEnd }) => {
    if ($rangeStart || $rangeEnd) return "#7c3aed";
    if ($inRange) return "rgba(124, 58, 237, 0.22)";
    return "transparent";
  }};
  box-shadow: ${({ $today }) => ($today ? "inset 0 0 0 1px #a78bfa" : "none")};
  font-weight: ${({ $rangeStart, $rangeEnd }) => ($rangeStart || $rangeEnd ? 700 : 500)};

  &:hover:not(:disabled) {
    background: ${({ $rangeStart, $rangeEnd, $inRange }) =>
      $rangeStart || $rangeEnd ? "#6d28d9" : $inRange ? "rgba(124, 58, 237, 0.32)" : "#27272a"};
  }

  &:disabled {
    cursor: default;
    opacity: 0.35;
  }
`;

const Footer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 12px;
  color: #a1a1aa;
`;

const ClearBtn = styled.button`
  border: none;
  background: none;
  color: #71717a;
  font-size: 12px;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #e4e4e7;
  }
`;

const Hint = styled.p`
  margin: 6px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`;

const WEEK_DAYS = ["일", "월", "화", "수", "목", "금", "토"] as const;

function parseIso(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function toIso(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function compareIso(a: string, b: string): number {
  return a.localeCompare(b);
}

function monthKey(year: number, month: number): string {
  return `${year}-${String(month + 1).padStart(2, "0")}`;
}

interface AdminProgramPeriodCalendarProps {
  startDate?: string;
  endDate?: string;
  onChange: (range: { startDate?: string; endDate?: string }) => void;
  allowClear?: boolean;
  hint?: string;
}

export default function AdminProgramPeriodCalendar({
  startDate,
  endDate,
  onChange,
  allowClear = true,
  hint,
}: AdminProgramPeriodCalendarProps) {
  const initial = startDate ? parseIso(startDate) : new Date(`${todayKstIso()}T12:00:00+09:00`);
  const [viewYear, setViewYear] = useState(initial.getFullYear());
  const [viewMonth, setViewMonth] = useState(initial.getMonth());
  const [pendingStart, setPendingStart] = useState<string | null>(null);

  const today = todayKstIso();
  const periodLabel = formatProgramPeriod(startDate, endDate);

  const cells = useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1).getDay();
    const totalDays = new Date(viewYear, viewMonth + 1, 0).getDate();
    const prevMonthDays = new Date(viewYear, viewMonth, 0).getDate();
    const out: Array<{ iso: string; day: number; inMonth: boolean }> = [];

    for (let i = firstDay - 1; i >= 0; i -= 1) {
      const day = prevMonthDays - i;
      const date = new Date(viewYear, viewMonth - 1, day);
      out.push({ iso: toIso(date), day, inMonth: false });
    }
    for (let day = 1; day <= totalDays; day += 1) {
      const date = new Date(viewYear, viewMonth, day);
      out.push({ iso: toIso(date), day, inMonth: true });
    }
    while (out.length % 7 !== 0) {
      const day = out.length - (firstDay + totalDays) + 1;
      const date = new Date(viewYear, viewMonth + 1, day);
      out.push({ iso: toIso(date), day, inMonth: false });
    }
    return out;
  }, [viewMonth, viewYear]);

  const shiftMonth = (delta: number) => {
    const next = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(next.getFullYear());
    setViewMonth(next.getMonth());
  };

  const applyRange = (start: string, end?: string) => {
    if (!end || start === end) {
      onChange({ startDate: start, endDate: start });
      return;
    }
    if (compareIso(start, end) <= 0) {
      onChange({ startDate: start, endDate: end });
    } else {
      onChange({ startDate: end, endDate: start });
    }
  };

  const handleDayClick = (iso: string, inMonth: boolean) => {
    if (!inMonth) {
      const date = parseIso(iso);
      setViewYear(date.getFullYear());
      setViewMonth(date.getMonth());
    }

    if (!pendingStart) {
      setPendingStart(iso);
      onChange({ startDate: iso, endDate: iso });
      return;
    }

    applyRange(pendingStart, iso);
    setPendingStart(null);
  };

  const inSelectedRange = (iso: string) => {
    if (!startDate) return false;
    const end = endDate ?? startDate;
    return compareIso(startDate, iso) <= 0 && compareIso(iso, end) <= 0;
  };

  return (
    <Shell>
      <CalendarCard>
        <Header>
          <NavBtn type="button" aria-label="이전 달" onClick={() => shiftMonth(-1)}>
            ‹
          </NavBtn>
          <MonthLabel>{viewYear}년 {viewMonth + 1}월</MonthLabel>
          <NavBtn type="button" aria-label="다음 달" onClick={() => shiftMonth(1)}>
            ›
          </NavBtn>
        </Header>
        <WeekRow>
          {WEEK_DAYS.map((label) => (
            <WeekDay key={label}>{label}</WeekDay>
          ))}
        </WeekRow>
        <DayGrid>
          {cells.map(({ iso, day, inMonth }) => {
            const effectiveEnd = endDate ?? startDate;
            const isStart = startDate === iso;
            const isEnd = effectiveEnd === iso && startDate !== effectiveEnd;
            const inRange = inSelectedRange(iso);
            return (
              <DayBtn
                key={`${monthKey(viewYear, viewMonth)}-${iso}`}
                type="button"
                $muted={!inMonth}
                $inRange={inRange && !isStart && !isEnd}
                $rangeStart={isStart}
                $rangeEnd={isEnd}
                $today={iso === today}
                onClick={() => handleDayClick(iso, inMonth)}
              >
                {day}
              </DayBtn>
            );
          })}
        </DayGrid>
        <Footer>
          <span>{periodLabel ?? "날짜를 선택하세요"}</span>
          {allowClear && (startDate || endDate) ? (
            <ClearBtn
              type="button"
              onClick={() => {
                setPendingStart(null);
                onChange({ startDate: undefined, endDate: undefined });
              }}
            >
              초기화
            </ClearBtn>
          ) : null}
        </Footer>
      </CalendarCard>
      {hint ? <Hint>{hint}</Hint> : null}
    </Shell>
  );
}
