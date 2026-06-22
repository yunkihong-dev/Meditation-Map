import { useCallback, useEffect, useMemo, useState } from "react";
import {
  fetchAdminApiTraffic,
  fetchAdminHttpTraffic,
  fetchAdminMemberTraffic,
  fetchAdminTraffic,
  type AdminApiTrafficBundle,
  type AdminMemberTrafficBundle,
  type AdminTrafficMetrics,
  type MetricSeries,
} from "@/services/admin/adminApi";
import AdminMetricLineChart from "@/components/admin/AdminMetricLineChart";
import {
  ChartSelect,
  ChartsStack,
  DashboardHeader,
  DashboardHeaderActions,
  DashboardStat,
  DashboardStatGrid,
  DashboardTitle,
  DAY_LIMIT_OPTIONS,
  EndpointGrid,
  MONTH_LIMIT_OPTIONS,
  SectionHeader,
  SectionTitle,
  type MetricGranularity,
} from "@/components/admin/adminMetricsTypes";
import { AdminCard, AdminEmbed, AdminError, AdminButton } from "@/components/admin/adminStyles";

export default function AdminDashboardPage() {
  const [metrics, setMetrics] = useState<AdminTrafficMetrics | null>(null);
  const [httpSeries, setHttpSeries] = useState<MetricSeries | null>(null);
  const [memberBundle, setMemberBundle] = useState<AdminMemberTrafficBundle | null>(null);
  const [apiBundle, setApiBundle] = useState<AdminApiTrafficBundle | null>(null);
  const [selectedApiUri, setSelectedApiUri] = useState("");
  const [granularity, setGranularity] = useState<MetricGranularity>("day");
  const [limit, setLimit] = useState(30);
  const [error, setError] = useState<string | null>(null);
  const [chartsError, setChartsError] = useState<string | null>(null);
  const [chartsLoading, setChartsLoading] = useState(false);
  const embedUrl = import.meta.env.VITE_ADMIN_METRICS_EMBED_URL as string | undefined;

  const limitOptions = granularity === "day" ? DAY_LIMIT_OPTIONS : MONTH_LIMIT_OPTIONS;

  const loadMetrics = useCallback(async () => {
    setError(null);
    try {
      setMetrics(await fetchAdminTraffic());
    } catch (e) {
      setError(e instanceof Error ? e.message : "지표를 불러오지 못했습니다.");
    }
  }, []);

  const loadCharts = useCallback(async () => {
    setChartsLoading(true);
    setChartsError(null);
    try {
      const [http, members, apis] = await Promise.all([
        fetchAdminHttpTraffic(granularity, limit),
        fetchAdminMemberTraffic(granularity, limit),
        fetchAdminApiTraffic(granularity, limit),
      ]);
      setHttpSeries(http);
      setMemberBundle(members);
      setApiBundle(apis);
    } catch (e) {
      setChartsError(e instanceof Error ? e.message : "그래프 데이터를 불러오지 못했습니다.");
    } finally {
      setChartsLoading(false);
    }
  }, [granularity, limit]);

  const load = useCallback(async () => {
    await Promise.all([loadMetrics(), loadCharts()]);
  }, [loadCharts, loadMetrics]);

  useEffect(() => {
    loadCharts();
  }, [loadCharts]);

  useEffect(() => {
    loadMetrics();
    const t = setInterval(loadMetrics, 30_000);
    return () => clearInterval(t);
  }, [loadMetrics]);

  useEffect(() => {
    const endpoints = apiBundle?.endpoints ?? [];
    if (endpoints.length === 0) {
      setSelectedApiUri("");
      return;
    }
    setSelectedApiUri((prev) =>
      endpoints.some((endpoint) => endpoint.uri === prev) ? prev : endpoints[0]!.uri
    );
  }, [apiBundle]);

  const selectedEndpoint = useMemo(
    () => apiBundle?.endpoints.find((endpoint) => endpoint.uri === selectedApiUri) ?? null,
    [apiBundle, selectedApiUri]
  );

  const handleGranularityChange = (value: MetricGranularity) => {
    setGranularity(value);
    setLimit(value === "day" ? 30 : 12);
  };

  return (
    <div>
      <DashboardHeader>
        <DashboardTitle>트래픽·운영 현황</DashboardTitle>
        <DashboardHeaderActions>
          <ChartSelect
            value={granularity}
            onChange={(e) => handleGranularityChange(e.target.value as MetricGranularity)}
            aria-label="집계 단위"
          >
            <option value="day">일별</option>
            <option value="month">월별</option>
          </ChartSelect>
          <ChartSelect
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            aria-label="조회 기간"
          >
            {limitOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </ChartSelect>
          <AdminButton $variant="ghost" type="button" onClick={load}>
            새로고침
          </AdminButton>
        </DashboardHeaderActions>
      </DashboardHeader>

      {error && <AdminError>{error}</AdminError>}
      {chartsError && <AdminError>{chartsError}</AdminError>}

      {metrics && (
        <DashboardStatGrid>
          <DashboardStat>
            <span>누적 HTTP</span>
            <strong>{metrics.totalHttpRequests.toLocaleString()}</strong>
          </DashboardStat>
          <DashboardStat>
            <span>회원</span>
            <strong>{metrics.membersCount.toLocaleString()}</strong>
          </DashboardStat>
          <DashboardStat>
            <span>명상지·센터</span>
            <strong>{metrics.placesCount.toLocaleString()}</strong>
          </DashboardStat>
          <DashboardStat>
            <span>전문가</span>
            <strong>{metrics.expertsCount.toLocaleString()}</strong>
          </DashboardStat>
          <DashboardStat>
            <span>지역</span>
            <strong>{metrics.regionsCount.toLocaleString()}</strong>
          </DashboardStat>
          <DashboardStat>
            <span>공지</span>
            <strong>{metrics.noticesCount.toLocaleString()}</strong>
          </DashboardStat>
        </DashboardStatGrid>
      )}

      <ChartsStack>
        <SectionHeader>
          <SectionTitle>주요 추이</SectionTitle>
        </SectionHeader>
        <EndpointGrid>
          <AdminMetricLineChart
            title="HTTP 요청 추이"
            series={httpSeries}
            loading={chartsLoading}
            unit="회"
            compact
            emptyMessage="아직 기록된 HTTP 요청이 없습니다."
          />
          <AdminMetricLineChart
            title={`회원 수 추이 (현재 ${memberBundle?.currentTotal.toLocaleString() ?? "-"}명)`}
            series={memberBundle?.cumulativeSeries ?? null}
            loading={chartsLoading}
            accent="teal"
            unit="명"
            compact
            emptyMessage="아직 가입한 회원이 없습니다."
          />
          <AdminMetricLineChart
            title="신규 가입 추이"
            series={memberBundle?.signupSeries ?? null}
            loading={chartsLoading}
            accent="gold"
            unit="명"
            compact
            emptyMessage="선택한 기간에 신규 가입이 없습니다."
          />
        </EndpointGrid>
      </ChartsStack>

      <ChartsStack>
        <SectionHeader>
          <SectionTitle>API별 호출량</SectionTitle>
          {apiBundle && apiBundle.endpoints.length > 0 ? (
            <ChartSelect
              value={selectedApiUri}
              onChange={(e) => setSelectedApiUri(e.target.value)}
              aria-label="API 선택"
            >
              {apiBundle.endpoints.map((endpoint) => (
                <option key={endpoint.uri} value={endpoint.uri}>
                  {endpoint.uri}
                </option>
              ))}
            </ChartSelect>
          ) : null}
        </SectionHeader>
        {chartsLoading && !apiBundle ? (
          <AdminCard>
            <p style={{ margin: 0, color: "#71717a", textAlign: "center", padding: "20px 0", fontSize: 13 }}>
              API 그래프를 불러오는 중…
            </p>
          </AdminCard>
        ) : selectedEndpoint ? (
          <AdminMetricLineChart
            title={selectedEndpoint.uri}
            series={selectedEndpoint.series}
            compact
            emptyMessage="호출 기록 없음"
          />
        ) : (
          <AdminCard>
            <p style={{ margin: 0, color: "#71717a", textAlign: "center", padding: "20px 0", fontSize: 13 }}>
              API 호출 기록이 쌓이면 URI별 그래프가 표시됩니다.
            </p>
          </AdminCard>
        )}
      </ChartsStack>

      {embedUrl && (
        <AdminCard style={{ marginTop: 20 }}>
          <SectionTitle>외부 모니터링</SectionTitle>
          <p style={{ margin: "0 0 10px", color: "#a1a1aa", fontSize: 12 }}>
            Prometheus / Grafana / Kibana — <code>VITE_ADMIN_METRICS_EMBED_URL</code>
          </p>
          <AdminEmbed src={embedUrl} title="metrics embed" />
        </AdminCard>
      )}
    </div>
  );
}
