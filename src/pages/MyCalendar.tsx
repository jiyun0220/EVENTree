import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time?: string;
  place: string;
  category: string;
}

export default function MyCalendar() {
  const navigate = useNavigate();

  // 더미 데이터 (추후 서버 연결 시 제거)
  const [events, setEvents] = useState<CalendarEvent[]>([
    {
      id: "1",
      title: "2024 방탄소년단 콘서트",
      date: "2024-12-25",
      time: "19:00",
      place: "서울 올림픽공원",
      category: "대중음악",
    },
    {
      id: "2",
      title: "신년 음악회",
      date: "2025-01-01",
      time: "15:00",
      place: "예술의전당 콘서트홀",
      category: "클래식",
    },
    {
      id: "3",
      title: "뮤지컬 오페라의 유령",
      date: "2025-02-14",
      time: "18:00",
      place: "샤롯데씨어터",
      category: "뮤지컬",
    },
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editDate, setEditDate] = useState("");
  const [editTime, setEditTime] = useState("");

  // 카테고리별 색상
  const categoryColors: { [key: string]: string } = {
    대중음악: "bg-purple-100 text-purple-700",
    클래식: "bg-blue-100 text-blue-700",
    무용: "bg-pink-100 text-pink-700",
    뮤지컬: "bg-yellow-100 text-yellow-700",
    영화: "bg-red-100 text-red-700",
    개그쇼: "bg-green-100 text-green-700",
    기타: "bg-gray-100 text-gray-700",
  };

  // 날짜 포맷팅
  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
    const weekday = weekdays[date.getDay()];
    return `${year}.${month}.${day} (${weekday})`;
  };

  // 날짜별 그룹핑
  const groupedEvents = events.reduce((acc, event) => {
    const dateKey = event.date;
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(event);
    return acc;
  }, {} as { [key: string]: CalendarEvent[] });

  // 날짜 정렬 (가까운 날짜 순)
  const sortedDates = Object.keys(groupedEvents).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  // 수정 모드 시작
  const handleEditStart = (event: CalendarEvent) => {
    setEditingId(event.id);
    setEditDate(event.date);
    setEditTime(event.time || "");
  };

  // 수정 저장
  const handleEditSave = (id: string) => {
    // TODO: 서버 API 호출
    setEvents(
      events.map((event) =>
        event.id === id ? { ...event, date: editDate, time: editTime } : event
      )
    );
    setEditingId(null);
    toast.success("일정이 수정되었습니다");
  };

  // 수정 취소
  const handleEditCancel = () => {
    setEditingId(null);
    setEditDate("");
    setEditTime("");
  };

  // 삭제
  const handleDelete = (id: string) => {
    // TODO: 서버 API 호출
    setEvents(events.filter((event) => event.id !== id));
    toast.success("일정이 삭제되었습니다");
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* 배경 그라데이션 */}
      <div className="fixed left-[-200px] top-[-200px] h-[538px] w-[692px] opacity-70 pointer-events-none z-[1]">
        <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-300 rounded-full blur-3xl" />
      </div>

      <div className="fixed right-[-100px] bottom-[-100px] h-[538px] w-[692px] opacity-70 pointer-events-none z-[1]">
        <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-300 rounded-full blur-3xl" />
      </div>

      {/* 헤더 */}
      <header className="relative z-10 flex items-center border-b border-[#888888]/30 bg-white px-10 py-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <span className="text-2xl">←</span>
          <img
            src="/logo.png"
            alt="EvenTree Logo"
            className="h-[40px] object-contain"
          />
        </button>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="relative z-10 max-w-5xl mx-auto px-10 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#222222] mb-2">내 캘린더</h1>
          <p className="text-[#888888]">
            저장한 일정을 확인하고 관리할 수 있습니다
          </p>
        </div>

        {/* 일정이 없는 경우 */}
        {events.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📅</div>
            <p className="text-xl text-[#888888] mb-2">
              저장된 일정이 없습니다
            </p>
            <p className="text-[#888888] mb-8">
              행사 상세 페이지에서 일정을 추가해보세요
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-[#38b000] text-white rounded-lg font-semibold hover:bg-[#2d8c00] transition-colors"
            >
              행사 둘러보기
            </button>
          </div>
        )}

        {/* 일정 목록 */}
        {sortedDates.map((date) => (
          <div key={date} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold text-[#222222]">
                {formatDate(date)}
              </h2>
              <span className="text-sm text-[#888888]">
                {groupedEvents[date].length}개의 일정
              </span>
            </div>

            <div className="space-y-4">
              {groupedEvents[date].map((event) => (
                <div
                  key={event.id}
                  className="bg-white border border-[#888888]/30 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            categoryColors[event.category] ||
                            categoryColors["기타"]
                          }`}
                        >
                          {event.category}
                        </span>
                        <h3 className="text-xl font-bold text-[#222222]">
                          {event.title}
                        </h3>
                      </div>

                      {editingId === event.id ? (
                        // 수정 모드
                        <div className="space-y-3 mt-4">
                          <div className="flex gap-3">
                            <div className="flex-1">
                              <label className="block text-sm text-[#888888] mb-1">
                                날짜
                              </label>
                              <input
                                type="date"
                                value={editDate}
                                onChange={(e) => setEditDate(e.target.value)}
                                className="w-full px-4 py-2 border border-[#888888] rounded-lg focus:outline-none focus:border-[#38b000]"
                              />
                            </div>
                            <div className="flex-1">
                              <label className="block text-sm text-[#888888] mb-1">
                                시간
                              </label>
                              <input
                                type="time"
                                value={editTime}
                                onChange={(e) => setEditTime(e.target.value)}
                                className="w-full px-4 py-2 border border-[#888888] rounded-lg focus:outline-none focus:border-[#38b000]"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEditSave(event.id)}
                              className="px-4 py-2 bg-[#38b000] text-white rounded-lg font-semibold hover:bg-[#2d8c00] transition-colors"
                            >
                              저장
                            </button>
                            <button
                              onClick={handleEditCancel}
                              className="px-4 py-2 bg-[#888888] text-white rounded-lg font-semibold hover:bg-[#666666] transition-colors"
                            >
                              취소
                            </button>
                          </div>
                        </div>
                      ) : (
                        // 일반 모드
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-[#444444]">
                            <span className="text-lg">⏰</span>
                            <span>{event.time || "시간 미정"}</span>
                          </div>
                          <div className="flex items-center gap-2 text-[#444444]">
                            <span className="text-lg">📍</span>
                            <span>{event.place}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* 버튼 영역 */}
                    {editingId !== event.id && (
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => handleEditStart(event)}
                          className="px-4 py-2 bg-white border border-[#38b000] text-[#38b000] rounded-lg font-semibold hover:bg-[#38b000] hover:text-white transition-colors"
                        >
                          수정
                        </button>
                        <button
                          onClick={() => handleDelete(event.id)}
                          className="px-4 py-2 bg-white border border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-colors"
                        >
                          삭제
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      <Toaster position="top-right" />
    </div>
  );
}
