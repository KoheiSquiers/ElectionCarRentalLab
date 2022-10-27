//
// public配下でなければ、ナスフォントが読みこまれないため、ここに配置する。
// 原因は不明。
//
import React from "react";
import { Document, Font, Image, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "../styles/pdfStyles";
import { Grid } from "../componentPDF/atoms/grid";
import { GridItem } from "../componentPDF/atoms/gridItem";
import { SimpleText } from "../componentPDF/atoms/simpleText";
import { ToDayJP } from "../utils/toDayJP";
import { TableHead } from "../componentPDF/atoms/table/tableHead";
import { TableRow } from "../componentPDF/atoms/table/tableRow";
import { Table } from "../componentPDF/atoms/table/table";
import { TableCell } from "../componentPDF/atoms/table/tableCell";
import { TableBody } from "../componentPDF/atoms/table/TableBody";
import { SendDataType } from "../pages/simulation";
import { CalcDataType } from "../features/simulation/calc/calcSimulation";

import { domainLabel } from "../utils/domainLabel";
import {
  CarTypeConv,
  DayConv,
  PiecesConv,
  PriceTaxConv,
  SignalLightConv,
  SpeakerConv,
  WattConv,
} from "../utils/dataConv";
//
// フォント定義
//

// フォント「ナス レギュラー」
Font.register({
  family: "Nasu-Regular",
  src: "./fonts/Nasu-Regular.ttf",
});

// フォント「ナス 太字」
Font.register({
  family: "Nasu-Bold",
  src: "./fonts/Nasu-Bold.ttf",
});

interface QuoteProps {
  sendData: SendDataType;
  calcData: CalcDataType;
}

export const Quote = ({ sendData, calcData }: QuoteProps) => {
  // 車両金額詳細
  const bodyValues: {
    label: string;
    value: string | number;
  }[] = [
    {
      label: domainLabel.carPrice,
      value: calcData.subs.carPrice,
    },
    {
      label: SignalLightConv(sendData.signalLight),
      value: calcData.subs.signalLight,
    },
    {
      label: `アンプサイズ：${WattConv(sendData.ampSize)}`,
      value: calcData.subs.ampSize,
    },
    {
      label: `スピーカー：${SpeakerConv(sendData.speaker)}`,
      value: calcData.subs.speaker,
    },
  ];
  // オプション金額詳細
  const optionValues: {
    label: string;
    value: string | number;
  }[] = [
    {
      label: `${domainLabel.totalMikePrice}: ${PiecesConv(sendData.wirelessMikeNumber)}`,
      value: calcData?.options.totalMikePrice,
    },
    {
      label: domainLabel.sdPrice,
      value: calcData?.options.sdPrice,
    },
    {
      label: domainLabel.incomePrice,
      value: calcData?.options.incomePrice,
    },
    {
      label: domainLabel.handSpeakerPrice,
      value: calcData?.options.handSpeakerPrice,
    },
    {
      label: domainLabel.bluetoothUnit,
      value: calcData?.options.bluetoothUnit,
    },
    {
      label: `${domainLabel.insurancePrice}: ${DayConv(sendData.insuranceDays)}`,
      value: calcData?.options.insurancePrice,
    },
  ];

  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          {/* ヘッダー */}
          <View style={styles.header}>
            <Text style={styles.fontSize20}>お見積もり書</Text>
            <View style={{ width: 200 }}>
              <Image src="./image/logo.png" />
            </View>
          </View>
          {/* アンダーライン */}
          <View style={styles.underline5} />
          {/* メインコンテンツ */}
          <View style={styles.main}>
            <Grid flexDirection={"row"} style={{ alignItems: "center" }}>
              <GridItem flexGrow={1}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell textAlign={"left"} width={"300"} border={false}>
                        <SimpleText size={"large"}>
                          {`車両名:　${CarTypeConv(sendData?.carType[sendData?.carClass])}`}
                        </SimpleText>
                      </TableCell>
                      {/*<TableCell width={"150"} border={false}></TableCell>*/}
                    </TableRow>

                    <TableRow>
                      <TableCell backgroundColor={"#E4E4E4"} width={"150"}>
                        車両金額
                      </TableCell>
                      <TableCell width={"150"} textAlign={"right"}>
                        {` ¥${calcData?.subTotalPrice?.toLocaleString()}（税込）`}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell backgroundColor={"#E4E4E4"} width={"150"}>
                        オプション金額
                      </TableCell>
                      <TableCell width={"150"} textAlign={"right"}>
                        {` ¥${calcData?.optionTotalPrice?.toLocaleString()}（税込）`}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell backgroundColor={"#E4E4E4"} width={"150"} bold>
                        合計金額
                      </TableCell>
                      <TableCell width={"150"} bold textAlign={"right"}>
                        {` ¥${calcData?.totalPrice?.toLocaleString()}（税込）`}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </GridItem>
              <GridItem flexGrow={2}>
                <Grid flexDirection={"column"}>
                  <SimpleText size={"normal"} bold position={"center"}>
                    {ToDayJP()}
                  </SimpleText>
                  <View style={{ paddingBottom: 2 }} />
                  <SimpleText size={"normal"} bold position={"center"}>
                    〒683-0105
                  </SimpleText>
                  <SimpleText size={"normal"} bold position={"center"}>
                    鳥取県米子市葭津33−1
                  </SimpleText>
                  <SimpleText size={"normal"} bold position={"center"}>
                    選挙レンタカーLab株式会社
                  </SimpleText>
                  <SimpleText size={"normal"} bold position={"center"}>
                    FAX:0859-21-4576
                  </SimpleText>
                  <SimpleText size={"normal"} bold position={"center"}>
                    FAX:0859-21-4576
                  </SimpleText>
                </Grid>
              </GridItem>
            </Grid>
            <View style={{ borderTop: 1, margin: 20 }} />
            {/* table*/}
            <SimpleText size={"large"}>【車両金額詳細】</SimpleText>
            <View
              style={{
                marginRight: 25,
                marginLeft: 25,
                marginTop: 5,
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>商品名</TableCell>
                    <TableCell width={"250"}>金額</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bodyValues.map((body, i) => {
                    return (
                      <>
                        <TableRow>
                          <TableCell>{body?.label}</TableCell>
                          <TableCell width={"250"} textAlign={"right"}>
                            {PriceTaxConv(body?.value)}
                          </TableCell>
                        </TableRow>
                      </>
                    );
                  })}
                  <TableRow>
                    <TableCell border={false}></TableCell>
                    <TableCell
                      width={"250"}
                      textAlign={"right"}
                      style={{
                        backgroundColor: "#E4E4E4",
                      }}
                    >
                      {` ¥${calcData?.subTotalPrice?.toLocaleString()}（税込）`}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </View>
            {/* オプションテーブル*/}
            <View style={{ paddingBottom: 5 }}></View>
            <SimpleText size={"large"}>【オプション金額詳細】</SimpleText>
            <View
              style={{
                marginRight: 25,
                marginLeft: 25,
                marginTop: 5,
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>商品名</TableCell>
                    <TableCell width={"250"}>金額</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {optionValues.map((body, i) => {
                    return (
                      <>
                        <TableRow>
                          <TableCell>{body?.label}</TableCell>
                          <TableCell width={"250"} textAlign={body?.value ? "right" : "center"}>
                            {body?.value ? PriceTaxConv(body?.value) : "無し"}
                          </TableCell>
                        </TableRow>
                      </>
                    );
                  })}
                  <TableRow>
                    <TableCell border={false}></TableCell>
                    <TableCell
                      width={"250"}
                      textAlign={"right"}
                      style={{
                        backgroundColor: "#E4E4E4",
                      }}
                    >
                      {` ¥${calcData?.optionTotalPrice?.toLocaleString()}（税込）`}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </View>

            {/*フッター*/}
            <View
              style={{
                marginRight: 25,
                marginLeft: 25,
                marginTop: 5,
              }}
            >
              <Grid flexDirection={"column"}>
                <SimpleText bold>■ 保証内容</SimpleText>
                <SimpleText>
                  {"　対人：無制限　対物：無制限（免責５万円）　搭乗者：1名につき上限3,000万円"}
                </SimpleText>
                <SimpleText>{"　車両：時価額（免責5万円）　看板：時価額"}</SimpleText>

                <SimpleText bold>■ 免責保証・看板保険は任意です</SimpleText>
                <SimpleText>
                  {"　任意で免責保証・看板保証（2,200円/日）にご加入いただけます"}
                </SimpleText>

                <SimpleText bold>■ 休車保証料</SimpleText>
                <SimpleText>
                  {
                    "　＊車両・看板にキズ・へこみ等をつけてしまった場合、休車保証料を請求させて頂きます"
                  }
                </SimpleText>
                <SimpleText>
                  {"　・自走可能・・・2万円　　　・自走不可能・・・5万円（＋レッカー代）"}
                </SimpleText>
              </Grid>
            </View>
            <View style={{ paddingTop: 5 }} />
            <Image src="./image/pdf_footer.png" />
          </View>
        </Page>
      </Document>
    </>
  );
};
