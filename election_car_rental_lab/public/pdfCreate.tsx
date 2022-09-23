//
// public配下でなければ、ナスフォントが読みこまれないため、ここに配置する。
//
import React from "react";
import {
  Page,
  Text,
  View,
  Font,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { styles } from "../styles/pdfStyles";
import { ListItem } from "../componentPDF/molecules/listItem";
import { Grid } from "../componentPDF/atoms/grid";
import { GridItem } from "../componentPDF/atoms/gridItem";
import { SimpleText } from "../componentPDF/atoms/simpleText";
import { ToDayJP } from "../utils/toDayJP";
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
  calcValue: any;
}

export const Quote = ({ calcValue }: QuoteProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* ヘッダー */}
        <View style={styles.header}>
          <Text style={styles.fontSize20}>お見積もり書</Text>
          <Text style={styles.fontSize15}>選挙レンタカーLab.</Text>
        </View>
        {/* アンダーライン */}
        <View style={styles.underline} />
        {/* メインコンテンツ */}
        <View style={styles.main}>
          <Grid flexDirection={"row"} style={{ alignItems: "center" }}>
            {/* flexGrowがうまく効かない */}
            <GridItem flexGrow={999}>
              <View style={{ paddingRight: 50 }}>
                <Grid flexDirection={"column"} borderTop borderBottom>
                  <ListItem
                    label={"車種金額"}
                    flexDirection={"row"}
                    borderLeft
                    borderRight
                    borderBottom
                  >
                    {` ¥${calcValue?.subTotalPrice?.toLocaleString()}（税込）`}
                  </ListItem>
                  <ListItem
                    label={"オプション金額"}
                    flexDirection={"row"}
                    borderLeft
                    borderRight
                    borderBottom
                  >
                    {` ¥${calcValue?.optionTotalPrice?.toLocaleString()}（税込）`}
                  </ListItem>
                  <ListItem
                    label={"合計金額"}
                    flexDirection={"row"}
                    borderLeft
                    borderRight
                    bold
                  >
                    {` ¥${calcValue?.totalPrice?.toLocaleString()}（税込）`}
                  </ListItem>
                </Grid>
              </View>
            </GridItem>
            <GridItem flexGrow={1}>
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
        </View>
        <View>
          <View style={styles.section}>
            <View>
              <Grid flexDirection={"row"}>
                <GridItem flexGrow={5}>
                  <Text>てすと１</Text>
                </GridItem>
                <GridItem flexGrow={1}>
                  <Text>テスト２</Text>
                </GridItem>
              </Grid>
            </View>
            <View>
              <Text>てすと１</Text>
              <Text>テスト２</Text>
            </View>
            <View style={styles.section}>
              <Text>{`合計金額 ¥${calcValue?.totalPrice?.toLocaleString()}（税込）`}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
