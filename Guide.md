# Websquare Conversion 적용 가이드

## 개요

Spring 설정 상 기존에 사용하던 `HttpPlatformRequest`, `HttpPlatformResponse` 를  
Websquare 변환을 위한 신규 클래스인  
`HttpWebsquareConvRequest`, `HttpWebsquareConvResponse` 로 변경한다.

---

## 변경 대상 요약

| 구분 | 기존 클래스 | 변경 클래스 |
| --- | --- | --- |
| Request | HttpPlatformRequest | HttpWebsquareConvRequest |
| Response | HttpPlatformResponse | HttpWebsquareConvResponse |

---

## ArgumentResolver Adaptor 변경

### 기존 코드

```java
HttpPlatformRequest httpPlatformRequest = new HttpPlatformRequest(request);

httpPlatformRequest.receiveData();
```

### 변경 코드

```java
HttpWebsquareConvRequest httpPlatformRequest = new HttpWebsquareConvRequest(request);

httpPlatformRequest.receiveData();
```

---

## View 변경

### 기존 코드

```java
HttpPlatformRequest platformRequest = new HttpPlatformRequest(request);

HttpPlatformResponse platformResponse = new HttpPlatformResponse(response, platformRequest);

platformResponse.setCharset(PlatformType.DEFAULT_CHAR_SET);
platformResponse.setData(platformData);
platformResponse.sendData();
```

### 변경 코드

```java
HttpWebsquareConvRequest wsReq = new HttpWebsquareConvRequest(request);

HttpWebsquareConvResponse wsRes = new HttpWebsquareConvResponse(response, wsReq);

wsRes.setCharset(PlatformType.DEFAULT_CHAR_SET);
wsRes.setData(platformData);
wsRes.sendData();
```

---

## 정리

- Request / Response 클래스만 Websquare 변환용으로 교체
- 기존 처리 로직 및 흐름은 그대로 유지
- ArgumentResolver와 View 모두 동일한 방식으로 적용
