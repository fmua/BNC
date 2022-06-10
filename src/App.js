//import './App.css';
import {
  Header,
  Screen01,
  Screen02,
  Screen03,
  Screen04,
  SuccessMsg,
  InactiveMsg,
  ExistsMsg,
  ErrorMsg,
  EmptyMsg,
  ProgressLoading,
} from "./components";
import React, { useState, useEffect, setTotalReactPackages } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import remedyInfos from "./remedyConfig.json";
import { useDispatch } from "react-redux";

import Lang from "./Lang.tsx";
import QrCodeRequest from "./apiRequest/QrCodeRequest";

function App(props) {
  const { t } = useTranslation();
  const [qrCodeTotal, setqrCodeTotal] = useState();
  const [qrCode, setqrCode] = useState([]);
  const [apiToken, setApiToken] = useState();
  const [isMounted, setIsMounted] = useState(false);
  const [tokenMounted, setTokenMounted] = useState(false);
  const dispatch = useDispatch();
  const addToken = (TokenValue) => {
    dispatch({
      type: "ADDTOKEN",
      payload: TokenValue,
    });
  };

  const remedyUrl = remedyInfos.remedyhost;
  const tokenLoginUrl = remedyInfos.remedyloginhost;
  const tokenLogoutUrl = remedyInfos.remedylogouthost;
  const username = remedyInfos.remedyuser.name;
  const pwd = remedyInfos.remedyuser.password;
  const queryParams = new URLSearchParams(window.location.search);
  const scannedQrCode = queryParams.get("qrCode");

  useEffect(() => {
    const options = {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "username=" + username + "&password=" + pwd,
    };
    fetch(tokenLoginUrl, options)
      .then((response) => response.text())
      .then((text) => {
        setApiToken(text);
        setTokenMounted(true);
      });
  }, []);
  console.log(username);

  if (tokenMounted) {
    addToken(apiToken);
    //console.log(apiToken);
  }

  const api_url =
    "https://artp0v6558.execute-api.ca-central-1.amazonaws.com/dev/qrcode/" +
    scannedQrCode;

  React.useEffect(() => {
    axios.get(api_url).then((response) => {
      setqrCode(response.data);
      setIsMounted(true);
    });
  }, []);

  const firstQrCode = qrCode[0];
  console.log(qrCode);
  if (scannedQrCode == null) {
    console.log(scannedQrCode);
    return (
      <div className="App bg_screen">
        <EmptyMsg />
      </div>
    );
  } else {
    if (isMounted) {
      const roomname = firstQrCode.location;
      const tiketType = firstQrCode.qr_code_type_id;
      const status = firstQrCode.status;
      const codeQR = firstQrCode.qr_code;
      const feedback_Link = firstQrCode.link_retroaction;

      // Scanned QRCode logging
      const log_api =
        "https://bpid0nqr8d.execute-api.ca-central-1.amazonaws.com/dev";
      const data = {
        type: "Applicatif",
        action: "Accueil",
        user: "system",
        details:
          "QrCode=" +
          scannedQrCode +
          "; Status=" +
          status +
          " " +
          "; Localisation=" +
          roomname,
      };

      axios
        .post(log_api, data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      const startScreen = () => {
        return { status } == "inactive" ? (
          <InactiveMsg />
        ) : (
          <Screen02
            codeQR={codeQR}
            ticketType={tiketType}
            roomname={roomname}
            token={apiToken}
            feedbackLink={feedback_Link}
          />
        );
      };

      return (
        <div className="App bg_screen">
          <Header />

          <Routes>
            <Route path="/" element={startScreen()} />
            <Route
              path="/Screen01/*"
              element={<Screen01 ticketType={tiketType} roomname={roomname} />}
            />
            <Route
              path="/Screen03"
              element={
                <Screen03
                  qrData={qrCode}
                  ticketType={tiketType}
                  roomname={roomname}
                />
              }
            />
            <Route
              path="/Screen04/*"
              element={
                <Screen04
                  codeQR={codeQR}
                  ticketType={tiketType}
                  roomname={roomname}
                />
              }
            />
            <Route
              path="/SuccessMsg"
              element={
                <SuccessMsg
                  feedbackLink={feedback_Link}
                  ticketType={tiketType}
                  roomname={roomname}
                />
              }
            />

            <Route
              path="/ExistsMsg"
              element={
                <ExistsMsg
                  feedbackLink={feedback_Link}
                  ticketType={tiketType}
                  roomname={roomname}
                />
              }
            />
            <Route
              path="/ErrorMsg"
              element={
                <ErrorMsg
                  feedbackLink={feedback_Link}
                  ticketType={tiketType}
                  roomname={roomname}
                />
              }
            />
          </Routes>
        </div>
      );
    } else {
      return (
        <div>
          <ProgressLoading />
        </div>
      );
    }
  }
}
export default App;
