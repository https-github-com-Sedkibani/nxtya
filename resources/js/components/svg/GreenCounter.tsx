import * as React from "react";

function GreenCounter(props: any) {
  const { value } = props;
  const [number, setNumber] = React.useState<any>("");

  React.useEffect(() => {
    let totalValue = value * 2;
    let stringValue = (totalValue / 10000).toString();
    setNumber(stringValue.split(".").join(""));
  }, [value]);
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div className="counter-numbers">
        <span id="_1">{number[4] ? number[4] : 0}</span>
        <span id="_2">{number[3] ? number[3] : 0}</span>
        <span id="_3">{number[2] ? number[2] : 0}</span>
        <span id="_4">{number[1] ? number[1] : 0}</span>
        <span id="_5">{number[0] ? number[0] : 0}</span>
      </div>
      <svg
        id="counter-2"
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        viewBox="0 0 424 114"
        xmlSpace="preserve"
        {...props}
      >
        <style>
          {
            ".prefix__XX19DKKD{fill:#9d4220}.prefix__st2{opacity:.5;fill:#f6da5b}.prefix__st4{fill:#c87b3a}.prefix__st8{opacity:.5;fill:#9d4220}.prefix__st10{fill:#fff}.prefix__XX19{opacity:.1;fill:#9d4220}.prefix__st13{fill:#722811}.prefix__st14{fill:#f6da5b}"
          }
        </style>
        <path
          className="prefix__XX19DKKD"
          d="M389.35 57.08c0-.13-.01-.25-.02-.38-.02-.33-.03-.66-.05-.99-.07-.92-.16-1.85-.27-2.77 0-.02-.01-.05-.01-.06-.06-.46-.11-.92-.17-1.38-.03-.18-.05-.35-.08-.53-.14-1.06-.33-2.13-.55-3.18-.65-3.34-1.58-6.62-2.79-9.79-.37-.93-.74-1.88-1.15-2.78-.38-.84-.77-1.66-1.18-2.48a53.16 53.16 0 00-1.73-3.14c-2.39-3.97-5.3-7.57-8.77-10.64-1.03-.91-2.09-1.76-3.22-2.55-.02-.02-.05-.03-.07-.04-.04-.03-.06-.05-.1-.08-.11-.07-.22-.15-.34-.23-1.9-1.31-3.91-2.47-6.08-3.46-.51-.22-.98-.46-1.49-.64-.01-.01-.01-.01-.02-.01-1.88-.77-3.85-1.42-5.93-1.93-3.56-.88-7.39-1.34-11.54-1.34h-296c-12.44 0-22.19 4.2-29.43 10.84-4.26 3.89-7.64 8.63-10.2 13.85-.52 1.04-.99 2.11-1.44 3.19-.07.2-.15.38-.22.58-.13.29-.24.57-.35.86-.22.57-.43 1.14-.63 1.72v.01c-.33.94-.62 1.89-.91 2.84-.03.1-.05.2-.07.3-.07.2-.13.42-.18.64-.17.59-.33 1.21-.47 1.81-.24.95-.42 1.88-.61 2.83-.07.38-.14.77-.2 1.16 0 .01-.01.01 0 .02-.44 2.45-.72 4.94-.86 7.43-.01.1-.02.24-.02.35-.06 1.12-.08 2.22-.08 3.32 0 4.12.38 8.28 1.18 12.37.17.94.38 1.9.62 2.83.34 1.4.72 2.79 1.16 4.16.31.98.65 1.94 1.01 2.88v.01c2.67 7.05 6.68 13.49 12.15 18.52 7.26 6.71 17.05 10.97 29.56 10.97h296c13.82 0 24.32-5.2 31.76-13.15.43-.47.86-.94 1.27-1.43.06-.08.14-.15.2-.24.05-.05.08-.1.12-.14.26-.31.51-.62.76-.94.45-.55.87-1.12 1.29-1.7 3.72-5.15 6.38-11.1 8.06-17.35.03-.06.04-.13.06-.2.05-.21.11-.42.16-.64.08-.25.13-.49.2-.75.12-.47.22-.97.33-1.46.13-.59.25-1.17.35-1.76.75-3.97 1.12-8 1.12-11.98-.04-1.13-.06-2.23-.13-3.35zM47.78 27.75h296c4.36 0 7.98.86 11.02 2.28 1.79.86 3.38 1.89 4.79 3.1.99.84 1.9 1.77 2.72 2.74.74.89 1.41 1.83 2.02 2.79 1.8 2.84 3.04 5.93 3.89 8.87.31 1.08.57 2.15.79 3.18.04.18.08.36.11.52.09.44.17.86.23 1.28.02.1.04.2.05.28.17 1.01.29 1.96.4 2.84.03.37.06.75.11 1.11.16 1.79.17 3.12.17 3.67 0 1.27-.12 6.29-1.65 12.05-.17.64-.36 1.3-.57 1.95-.13.41-.26.78-.39 1.18-.08.22-.16.45-.26.67-.09.23-.18.48-.28.72 0 .01-.01.02-.01.02-.03.08-.05.17-.1.25-2.86 7-8.24 13.82-18.34 15.43-1.47.24-3.05.37-4.72.37h-296c-7.99 0-13.56-2.85-17.43-6.89a5.22 5.22 0 01-.39-.43c-.45-.46-.87-.95-1.25-1.46-.06-.09-.14-.18-.21-.26-.31-.4-.61-.82-.88-1.25-.38-.55-.74-1.14-1.06-1.71-.29-.51-.58-1.04-.84-1.57-.51-1.02-.95-2.05-1.35-3.09-.08-.17-.14-.37-.21-.54-.09-.25-.19-.52-.27-.79-.14-.41-.27-.82-.39-1.21-.08-.28-.17-.56-.25-.84-.22-.81-.42-1.59-.59-2.35-1.12-4.97-1.21-9.12-1.21-10.25 0-.55.02-1.87.18-3.65.19-2.14.58-4.97 1.37-8.01.24-.92.51-1.85.83-2.81.07-.2.14-.41.22-.64.15-.45.33-.91.51-1.37.05-.16.11-.31.18-.46.15-.37.31-.72.47-1.07.32-.69.66-1.38 1.02-2.05.14-.27.29-.53.44-.79.13-.21.26-.44.39-.65.44-.69.9-1.39 1.4-2.05.12-.17.25-.34.38-.49.9-1.14 1.92-2.21 3.06-3.19a22.04 22.04 0 013.8-2.62c3.25-1.73 7.22-2.81 12.1-2.81z"
        />
        <linearGradient
          id="prefix__SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1={195.775}
          y1={0.534}
          x2={195.775}
          y2={101.741}
        >
          <stop offset={0} stopColor="#efc958" />
          <stop offset={1} stopColor="#cd5c21" />
        </linearGradient>
        <path
          d="M389.43 52.94l-.03-1.43c0-.18-.01-.36-.02-.54-.03-1.06-.1-2.12-.19-3.18a66.71 66.71 0 00-1.53-9.4c-.23-.97-.48-1.9-.75-2.84-.14-.47-.28-.95-.44-1.43-.15-.48-.31-.96-.48-1.44-.04-.1-.06-.19-.1-.29-.33-.96-.69-1.91-1.08-2.87-1.47-3.59-3.31-7.02-5.51-10.16a51.63 51.63 0 00-2.13-2.8c-.02-.05-.06-.07-.09-.11l-.01-.01c-.01-.02-.02-.02-.04-.05a44.32 44.32 0 00-3.01-3.27c-.03-.03-.05-.05-.09-.07-.9-.9-1.85-1.74-2.84-2.55l-.01-.02c-6.98-5.63-16.04-9.13-27.3-9.13h-296c-2.3 0-4.51.15-6.61.44h-.07c-3.97.52-7.63 1.53-10.97 2.94-.02 0-.06.03-.08.03-.39.15-.78.32-1.16.5-1.38.63-2.7 1.34-3.97 2.1-4.87 2.95-8.93 6.83-12.2 11.34-3.2 4.4-5.65 9.38-7.39 14.66-.07.18-.13.37-.19.56-.27.86-.53 1.73-.76 2.62-.06.19-.11.39-.16.59-.07.25-.12.5-.18.74-.15.59-.28 1.17-.41 1.75-.04.2-.09.4-.12.58-.18.87-.34 1.72-.48 2.59-.03.09-.05.2-.06.29-.02.12-.05.25-.05.37-.12.8-.24 1.59-.33 2.38-.12.94-.21 1.91-.28 2.87-.02.3-.05.62-.05.92-.01.02-.01.03 0 .05v.01c-.01.01-.01.01 0 .02-.01.01-.01.01 0 .02l-.01.02s.01 0 .01.01v.01c-.01.01-.01.01 0 .03v.01c0 .01-.01.01-.01.01l.01.01c-.01.01-.01.01 0 .02-.01.01-.01.01 0 .03v.01c-.01.01-.01.01 0 .02-.01.01-.01.01 0 .02 0 .01-.01.02-.01.02l.01.01c-.01.01-.01.01 0 .02-.01.02-.01.02 0 .02v.02c-.01.01-.01.01 0 .02-.01.01-.01.01 0 .02l-.01.01.01.02c-.01.01-.01.01 0 .02-.01.01-.01.01 0 .02v.01c-.01.02-.01.02 0 .03-.01.01-.01.03 0 .03-.01.03-.01.05 0 .07-.1 1.19-.14 2.39-.14 3.56 0 1.09.02 2.22.08 3.32 0 .12 0 .24.02.36.24 4.36.92 8.74 2.02 12.99.28 1.08.59 2.13.93 3.18 0 .03.03.07.03.11.11.33.21.66.33.98.14.45.29.9.47 1.34.06.2.12.37.2.56.22.59.47 1.17.7 1.75.37.89.75 1.76 1.16 2.6.1.22.22.44.33.65.2.42.42.84.64 1.25.17.35.36.7.57 1.06.09.17.19.33.29.49 2.91 5.09 6.69 9.61 11.35 13.21 6.88 5.31 15.69 8.56 26.56 8.56h296c9.18 0 16.9-2.33 23.23-6.26a39.44 39.44 0 003.81-2.68c.01-.02.02-.02.02-.03.15-.11.28-.22.43-.35.1-.07.2-.16.31-.25a41.3 41.3 0 002.61-2.35c4.6-4.56 8.12-10.14 10.62-16.23.11-.29.23-.56.33-.84.11-.28.22-.55.31-.82v-.01c.11-.24.2-.49.28-.73.06-.15.11-.33.17-.48.31-.9.61-1.81.88-2.73 1.45-4.87 2.29-9.94 2.55-14.99.01-.11.02-.22.02-.33l.03-.67c.04-.89.06-1.77.06-2.63v-.24c-.02-.28-.02-.47-.03-.67z"
          fill="url(#prefix__SVGID_1_)"
        />
        <path
          className="prefix__XX19DKKD"
          d="M343.81 90.43H48.62c-24.88 0-25.6-32.26-25.6-35.95 0-3.68.72-35.94 25.6-35.94h295.19c24.88 0 28.99 24.07 28.99 35.94-.01 10.77-4.11 35.95-28.99 35.95z"
        />
        <path
          className="prefix__st2"
          d="M53.03 80.26l31.29 26.41-9.38-.32S62.42 88.09 53.03 80.26z"
        />
        <path
          className="prefix__XX19DKKD"
          d="M343.81 90.43H48.62c-24.88 0-25.6-32.26-25.6-35.95 0-3.68.72-35.94 25.6-35.94h295.19c24.88 0 28.99 24.07 28.99 35.94-.01 10.77-4.11 35.95-28.99 35.95z"
        />
        <g opacity={0.5}>
          <path
            className="prefix__st4"
            d="M389.38 51.45c-.21-.04-.42-.04-.63-.08-5.3-.76-12.06-1.55-20.24-2.3-15.61-1.38-184.66-2.42-210.29-2-40.99.67-100.22 6.85-136.67 11.1-7.43.87-13.95 1.66-19.12 2.33h-.34c0-.96.04-1.96.08-2.92v-.67h.09c5.34-.66 12.02-1.46 19.7-2.37 36.56-4.22 95.34-10.31 136.17-10.98 24.96-.42 193.68.54 209.24 1.88 8.31.72 15.24 1.51 20.7 2.26.38.04.71.08 1.04.16 0 .13.04.3.04.42.14 1.04.18 2.12.23 3.17zM371.84 102.96c-1.17 1-2.38 1.91-3.67 2.75h-.04l-7.97-1.92-25.38-6.13c-.25-.09-153.14-1.84-160.7-4.13-14.28-4.3-39.2-10.44-64.95-10.44-13.57 0-32.48-1.5-51.51-3.46 5.51 5.01 10.85 9.64 15.99 13.9 5.84 4.84 11.35 9.22 16.53 13.15 2.79 2.13 5.47 4.09 8.01 5.97h-6.01c-2.5-1.88-5.13-3.88-7.81-5.97-5.13-3.97-10.56-8.35-16.24-13.15a562.21 562.21 0 01-16.44-14.57c-9.56-1.04-19.04-2.17-27.72-3.3-6.93-.83-13.4-1.71-19.03-2.46-.54-.08-1.09-.17-1.63-.2-.25-1.21-.46-2.46-.62-3.68.37.08.79.12 1.25.17 5.55.75 11.98 1.62 18.95 2.5 9.06 1.17 18.99 2.38 29.05 3.47.37-.08.75-.04 1.09.08 20.58 2.26 41.54 4.01 56.14 4.01 34.69 0 216.17 10.93 224.61 13.98 1.29.45 2.04.71 2.09.75l29.47 7.09 6.54 1.59zM384.24 28.69c-1.34-.2-2.71-.42-4.18-.62-24.25-3.55-215.26-9.68-247.85-13.78-.17.12-.34.25-.54.33C110.29 22.89 86 26.73 63.83 28.23c-8.1.59-15.95.83-23.21.83-.08.05-.13.05-.17.05h-2.59c-10.23 0-19.33-.38-26.51-.88-1.34-.04-2.59-.12-3.76-.21.54-1.21 1.13-2.33 1.75-3.46 1.42.09 2.92.21 4.51.29 25.67 1.51 72.3 1.76 110.91-11.48-3.76-.46-7.31-.87-10.64-1.25-10.94-1.26-22.5-2.22-33.85-2.97-20.44-1.37-40.02-2.08-53.34-2.46.67-.34 1.3-.67 1.97-.97.38-.16.75-.33 1.17-.49h.09c1.67-.71 3.43-1.3 5.22-1.8h.17c21.21.67 52.18 2.13 79.02 5.14 1.63.17 3.3.38 5.01.58 14.78 1.75 33.19 4.17 51.51 6.68 14.99.59 176.31-1.71 186.54-4.71h.04c3.38-1 6.43-2.05 9.18-3.13 1.25.75 2.46 1.58 3.59 2.5-2.21.92-4.68 1.83-7.35 2.72-6.59 2.25-14.61 4.3-23.71 5.42 14.11 1.97 27.3 3.89 37.74 5.43 1.84.25 3.59.54 5.26.75.69 1.29 1.32 2.55 1.86 3.88z"
          />
        </g>
        <path
          className="prefix__st2"
          d="M65.03 80.53s25.31 2.61 46.18 2.61 40.7 4.7 55.83 8.35c15.13 3.66 174.91 8.09 183.52 9.92 0 0-168.39-3.91-187.44-8.61-19.04-4.7-28.44-5.48-43.57-6.52-15.12-1.06-47.1-4.84-54.52-5.75zM26.93 6.69s-5.2 2.61-10.68 7.57c0 0 5.22-3.13 20.09-3.39 14.87-.26 40.7.26 51.13 1.31 10.44 1.04 33.14 2.61 33.14 2.61l3.13-1.04s-20.87-2.87-42-4.17C60.6 8.26 26.93 6.69 26.93 6.69zM132.21 14.29s25.44 3.36 37.96 5.44c12.52 2.09 171.26 3.13 181.96 4.18 10.69 1.04 32.11 4.77 32.11 4.77s2.59 7.22 3.89 12.18c0 0-5.22-9.39-15.13-11.48s-21.13-3.65-40.44-5.74-202.04-8.09-202.04-8.09l1.69-1.26zM340.91 18.43s25.11-4.66 29.51-7.94c0 0 3.62 2.72 5.71 5.33 0 0-2.09-1.04-7.05-.78s-24.26 4.7-24.26 4.7l-3.91-1.31zM388.75 51.36L373 49.32l.26 2.77 16.2 2.15-.63-2.3z"
        />
        <path
          d="M35.7 30.56c-1.4.77-2.67 1.65-3.8 2.62-1.14.98-2.15 2.05-3.06 3.19-.13.15-.25.32-.38.49-.5.66-.96 1.35-1.4 2.05-.13.21-.26.44-.39.65-.15.26-.3.52-.44.79-.36.67-.7 1.36-1.02 2.05-.16.35-.32.71-.47 1.07-.07.15-.13.3-.18.46-.19.46-.37.92-.51 1.37-.09.23-.15.43-.22.64-.32.96-.59 1.88-.83 2.81-.79 3.04-1.18 5.87-1.37 8.01-.16 1.78-.18 3.1-.18 3.65 0 1.13.09 5.27 1.21 10.25.17.76.36 1.54.59 2.35.08.28.16.56.25.84.12.39.25.8.39 1.21.09.27.18.54.27.79.07.18.13.37.21.54.39 1.04.83 2.07 1.35 3.09.26.53.56 1.06.84 1.57.32.58.68 1.16 1.06 1.71.27.42.57.85.88 1.25.06.08.14.17.21.26.38.5.8.99 1.25 1.46.12.15.25.3.39.43 3.87 4.04 9.43 6.89 17.43 6.89h287.04c-.48-7.2-2.51-14.14-4.47-20.87-1.66-5.7-3.26-11.15-3.94-16.63-4.67.92-9.9.14-14.26-2.34-6.32-3.59-9.8-9.94-9.8-17.86v-3.84h24.1a46.16 46.16 0 01-2.2-3.76H47.78c-4.88 0-8.85 1.08-12.08 2.81z"
          fill="none"
        />
        <path
          d="M349.23 105.36c-1.94-1.76-3.19-4.09-3.89-6.55-.72-2.46-.87-5.08-.72-7.67.15-2.9.04-5.82-.28-8.69-.65-5.75-2.06-11.29-3.46-16.66-.7-2.69-1.39-5.34-1.99-7.97-.6-2.63-1.08-5.23-1.37-7.8l-.42-3.63-3.7.66c-2.69.48-5.56.27-8.21-.51-1.32-.41-2.61-.95-3.78-1.65-1.19-.7-2.29-1.51-3.24-2.46-1.91-1.9-3.26-4.3-4.02-6.98-.38-1.34-.6-2.75-.69-4.19l-.05-1.1-.01-.5c.88-.02 1.76-.04 2.64-.07l6.03-.18 6.03-.22 6.03-.26 4.77-.21-2.66-3.68c-1.59-2.19-3-4.57-4.22-7.05-.31-.62-.6-1.25-.89-1.88-.14-.31-.29-.66-.4-.93l-.16-.41-.14-.42c-.16-.57-.29-1.15-.33-1.74-.04-.59-.01-1.18.08-1.75.21-1.13.72-2.18 1.6-2.96l.34-.29.37-.25c.12-.09.25-.17.39-.24.14-.07.27-.15.41-.21.56-.24 1.16-.41 1.78-.48.63-.05 1.27-.01 1.92.12a9.2 9.2 0 011.9.68c.61.32 1.19.7 1.74 1.15.53.46 1.04.97 1.5 1.53-2.01-3.23-6.07-5.53-9.94-3.67-3.88 1.87-4.38 6.33-3.19 9.68 1.48 4.17 3.29 7.68 5.13 10.5h-24.1v3.84c0 7.93 3.48 14.27 9.8 17.86 4.36 2.48 9.59 3.27 14.26 2.34.68 5.47 2.27 10.93 3.94 16.63 2.25 7.72 4.58 15.7 4.58 24.03 0 12.11 6.98 17.54 13.89 17.54h0a14.16 14.16 0 01-3.96-1.09c-1.25-.56-2.35-1.34-3.31-2.21z"
          opacity={0.6}
          fill="#9d4220"
          stroke="#9d4220"
          strokeMiterlimit={10}
        />
        <path
          className="prefix__st8"
          d="M304.9 31.52v3.84c0 7.93 3.48 14.27 9.8 17.86 4.36 2.48 9.59 3.27 14.26 2.34.68 5.47 2.27 10.93 3.94 16.63 1.97 6.74 3.99 13.67 4.47 20.87h8.95c1.67 0 3.25-.12 4.72-.37 10.1-1.62 15.48-8.44 18.34-15.43.05-.08.07-.17.1-.25 0-.01.01-.02.01-.02.1-.24.19-.48.28-.72.1-.22.18-.45.26-.67.13-.4.26-.77.39-1.18.21-.65.4-1.31.57-1.95 1.54-5.76 1.65-10.78 1.65-12.05 0-.55-.02-1.88-.17-3.67-.05-.36-.08-.74-.11-1.11-.11-.87-.24-1.83-.4-2.84-.01-.08-.03-.18-.05-.28-.06-.42-.14-.84-.23-1.28-.04-.17-.07-.34-.11-.52-.22-1.03-.48-2.1-.79-3.18-.85-2.94-2.09-6.03-3.89-8.87-.61-.97-1.28-1.9-2.02-2.79-.82-.98-1.73-1.91-2.72-2.74-1.41-1.21-3-2.24-4.79-3.1-3.04-1.43-6.66-2.28-11.02-2.28H326.8c.71 1.37 1.45 2.62 2.2 3.76h-24.1z"
        />
        <path
          className="prefix__st8"
          d="M391.91 57.08c0-.13-.01-.25-.02-.38-.02-.33-.03-.66-.05-.99-.07-.92-.16-1.85-.27-2.77 0-.02-.01-.05-.01-.06-.06-.46-.11-.92-.17-1.38-.03-.18-.05-.35-.08-.53-.14-1.06-.33-2.13-.55-3.18-.65-3.34-1.58-6.62-2.79-9.79-.37-.93-.74-1.88-1.15-2.78-.38-.84-.77-1.66-1.18-2.48a53.16 53.16 0 00-1.73-3.14 46.498 46.498 0 00-5.32-7.2c-2.43 1.83-5.49 3.05-9.59 3.05h-16.22c-8.56 0-12.64-5.39-15.79-10.44-2.01-3.23-6.07-5.53-9.94-3.67-3.88 1.87-4.38 6.33-3.19 9.68a52.44 52.44 0 002.93 6.74h19.53c4.36 0 7.98.86 11.02 2.28 1.79.86 3.38 1.89 4.79 3.1.99.84 1.9 1.77 2.72 2.74.74.89 1.41 1.83 2.02 2.79 1.8 2.84 3.04 5.93 3.89 8.87.31 1.08.57 2.15.79 3.18.04.18.08.36.11.52.09.44.17.86.23 1.28.02.1.04.2.05.28.17 1.01.29 1.96.4 2.84.03.37.06.75.11 1.11.16 1.79.17 3.12.17 3.67 0 1.27-.12 6.29-1.65 12.05-.17.64-.36 1.3-.57 1.95-.13.41-.26.78-.39 1.18-.08.22-.16.45-.26.67-.09.23-.18.48-.28.72 0 .01-.01.02-.01.02-.03.08-.05.17-.1.25-2.86 7-8.24 13.82-18.34 15.43-1.47.24-3.05.37-4.72.37h-8.95c.07 1.05.11 2.1.11 3.16 0 8.36 3.32 13.53 7.65 15.94h1.19c13.82 0 24.32-5.2 31.76-13.15.43-.47.86-.94 1.27-1.43.06-.08.14-.15.2-.24.05-.05.08-.1.12-.14.26-.31.51-.62.76-.94.45-.55.87-1.12 1.29-1.7 1.1-1.53 2.11-3.14 3.03-4.8.78-6.02 2.48-11.87 4.15-17.57 1.17-3.99 2.29-7.86 3.1-11.7v-.07c.02-1.12 0-2.22-.07-3.34z"
        />
        <path
          d="M366.01 103.35c3.14 0 5.77 1.45 9.52 1.45 5.87 0 10.07-5.05 10.07-13.7 0-16.99 8.87-31.85 8.87-46 7.99 4.77 23.7.69 23.7-14.86h-28.6c2.88-2.21 7.04-7.71 9.87-15.62 1.84-5.19-3.44-7.26-6.27-2.7-2.82 4.55-7.86 12.25-19.04 12.25h-16.22c-11.18 0-16.2-7.7-19.04-12.25s-8.1-2.49-6.26 2.7c2.81 7.91 6.99 13.41 9.87 15.62h-28.61c0 15.55 15.71 19.63 23.71 14.86 0 14.15 8.87 29.01 8.87 46 0 8.64 4.18 13.7 10.05 13.7 3.74 0 6.38-1.45 9.51-1.45z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#891f28"
        />
        <path
          className="prefix__st10"
          d="M397.91 26.4c1.84-2.81 3.65-6.33 5.14-10.5 1.19-3.35.69-7.81-3.2-9.68-3.87-1.86-7.93.44-9.95 3.68-3.13 5.05-7.19 10.44-15.78 10.44H357.9c-8.56 0-12.64-5.39-15.79-10.44-2.01-3.23-6.07-5.53-9.94-3.67-3.88 1.87-4.38 6.33-3.19 9.68 1.48 4.17 3.29 7.68 5.13 10.5h-24.1v3.84c0 7.93 3.48 14.27 9.8 17.86 4.36 2.48 9.59 3.27 14.26 2.34.68 5.47 2.27 10.93 3.94 16.63 2.25 7.72 4.58 15.7 4.58 24.03 0 12.11 6.98 17.54 13.89 17.54 2.42 0 4.37-.47 6.1-.88 1.28-.31 2.38-.57 3.43-.57 1.05 0 2.15.27 3.43.57 1.72.41 3.67.88 6.09.88 6.92 0 13.9-5.42 13.9-17.54 0-8.33 2.33-16.31 4.58-24.03 1.66-5.7 3.26-11.15 3.94-16.63 4.66.92 9.88.13 14.24-2.34 6.32-3.59 9.81-9.94 9.81-17.87V26.4h-24.09z"
        />
        <path
          d="M397.91 26.4c1.84-2.81 3.65-6.33 5.14-10.5 1.19-3.35.69-7.81-3.2-9.68-3.87-1.86-7.93.44-9.95 3.68-3.13 5.05-7.19 10.44-15.78 10.44H357.9c-8.56 0-12.64-5.39-15.79-10.44-2.01-3.23-6.07-5.53-9.94-3.67-3.88 1.87-4.38 6.33-3.19 9.68 1.48 4.17 3.29 7.68 5.13 10.5h-24.1v3.84c0 7.93 3.48 14.27 9.8 17.86 4.36 2.48 9.59 3.27 14.26 2.34.68 5.47 2.27 10.93 3.94 16.63 2.25 7.72 4.58 15.7 4.58 24.03 0 12.11 6.98 17.54 13.89 17.54 2.42 0 4.37-.47 6.1-.88 1.28-.31 2.38-.57 3.43-.57 1.05 0 2.15.27 3.43.57 1.72.41 3.67.88 6.09.88 6.92 0 13.9-5.42 13.9-17.54 0-8.33 2.33-16.31 4.58-24.03 1.66-5.7 3.26-11.15 3.94-16.63 4.66.92 9.88.13 14.24-2.34 6.32-3.59 9.81-9.94 9.81-17.87V26.4h-24.09z"
          fill="#8cba27"
        />
        <path
          className="prefix__XX19"
          d="M420.59 26.4v.53c0 7.93-3.48 14.28-9.81 17.87-4.36 2.47-9.58 3.26-14.24 2.34-.68 5.47-2.27 10.93-3.94 16.63-2.25 7.72-4.58 15.7-4.58 24.03 0 12.11-6.98 17.54-13.9 17.54-2.41 0-4.36-.47-6.09-.88-1.28-.31-2.39-.57-3.43-.57s-2.15.26-3.43.57c-1.72.41-3.68.88-6.1.88-4.39 0-8.8-2.19-11.44-6.89 2.19 6.99 7.54 10.2 12.85 10.2 2.42 0 4.37-.47 6.1-.88 1.28-.31 2.38-.57 3.43-.57 1.05 0 2.15.27 3.43.57 1.72.41 3.67.88 6.09.88 6.92 0 13.9-5.42 13.9-17.54 0-8.33 2.33-16.31 4.58-24.03 1.66-5.7 3.26-11.15 3.94-16.63 4.66.92 9.88.13 14.24-2.34 6.32-3.59 9.81-9.94 9.81-17.87V26.4h-1.41z"
        />
        <path
          className="prefix__XX19"
          d="M420.59 26.4v.53c0 7.93-3.48 14.28-9.81 17.87-4.36 2.47-9.58 3.26-14.24 2.34-.68 5.47-2.27 10.93-3.94 16.63-2.25 7.72-4.58 15.7-4.58 24.03 0 12.11-6.98 17.54-13.9 17.54-2.41 0-4.36-.47-6.09-.88-1.28-.31-2.39-.57-3.43-.57s-2.15.26-3.43.57c-1.72.41-3.68.88-6.1.88-4.39 0-8.8-2.19-11.44-6.89 2.19 6.99 7.54 10.2 12.85 10.2 2.42 0 4.37-.47 6.1-.88 1.28-.31 2.38-.57 3.43-.57 1.05 0 2.15.27 3.43.57 1.72.41 3.67.88 6.09.88 6.92 0 13.9-5.42 13.9-17.54 0-8.33 2.33-16.31 4.58-24.03 1.66-5.7 3.26-11.15 3.94-16.63 4.66.92 9.88.13 14.24-2.34 6.32-3.59 9.81-9.94 9.81-17.87V26.4h-1.41z"
        />
        <path
          className="prefix__st13"
          d="M37.85 23.91h31.19v60.96H37.85zM71.29 23.91h31.19v60.96H71.29z"
        />
        <path
          transform="rotate(-180 70.168 54.388)"
          className="prefix__st14"
          d="M69.04 23.91h2.25v60.96h-2.25z"
        />
        <path
          transform="rotate(-180 103.61 54.388)"
          className="prefix__st14"
          d="M102.49 23.91h2.25v60.96h-2.25z"
        />
        <path
          transform="rotate(-180 137.102 54.388)"
          className="prefix__st14"
          d="M135.98 23.91h2.25v60.96h-2.25z"
        />
        <path
          transform="rotate(-180 170.594 54.388)"
          className="prefix__st14"
          d="M169.47 23.91h2.25v60.96h-2.25z"
        />
        <path
          transform="rotate(-180 134.905 54.388)"
          className="prefix__st14"
          d="M133.78 23.91h2.25v60.96h-2.25z"
        />
        <path
          className="prefix__st13"
          d="M104.83 23.91h31.19v60.96h-31.19zM138.28 23.91h31.19v60.96h-31.19zM171.72 23.91h31.19v60.96h-31.19z"
        />
        <g>
          <path
            className="prefix__st10"
            d="M235.99 36.14c.16.16.34.28.55.37.21.09.43.13.67.13s.47-.04.67-.13a1.72 1.72 0 00.92-.92c.09-.21.13-.43.13-.67 0-.24-.04-.47-.13-.67a1.72 1.72 0 00-.92-.92c-.21-.09-.43-.13-.67-.13s-.47.05-.67.13a1.72 1.72 0 00-.92.92c-.09.21-.13.43-.13.67 0 .24.04.47.13.67.09.21.21.39.37.55zM234.88 55.97c.75-.28 1.4-.64 1.93-1.08.54-.44.97-.98 1.3-1.6.33-.63.56-1.38.71-2.24h9.75V39.99h-3.51v8.1h-6.05v-8.1h-3.51v9.3c0 .63-.05 1.18-.14 1.65-.09.47-.27.88-.54 1.23s-.64.64-1.13.87c-.49.23-1.12.43-1.9.58l.46 2.99c1.01-.15 1.88-.36 2.63-.64zM250.33 36.35h-1.2c-.33 0-.62-.05-.86-.14-.24-.09-.44-.22-.61-.36-.16-.15-.28-.31-.36-.49-.08-.18-.11-.35-.11-.52 0-.36.11-.62.33-.8.22-.17.53-.26.94-.26.21 0 .45.02.72.07.27.05.53.09.76.15l.34-2.18c-.5-.09-.92-.14-1.25-.16-.33-.02-.62-.03-.88-.03-.65 0-1.21.07-1.68.22s-.86.35-1.16.61c-.3.26-.53.55-.67.88-.15.33-.22.69-.22 1.07 0 .34.06.69.19 1.04.13.36.28.65.47.9h-1.63v2.13h6.89v-2.13zM252.09 31.69h3.51v19.38h-3.51zM280.81 53.7a1.72 1.72 0 00-.55-.37c-.21-.09-.43-.13-.67-.13s-.47.04-.67.13a1.72 1.72 0 00-.92.92c-.09.21-.13.43-.13.67 0 .24.04.47.13.67a1.72 1.72 0 00.92.92c.21.09.43.13.67.13s.47-.05.67-.13a1.72 1.72 0 00.92-.92c.09-.21.13-.43.13-.67 0-.24-.04-.47-.13-.67-.09-.21-.21-.4-.37-.55z"
          />
          <path
            className="prefix__st10"
            d="M293.88 31.67h-3.51V48.1H286c-.22 0-.4-.12-.55-.35-.15-.23-.28-.55-.38-.94-.11-.39-.2-.84-.29-1.35-.09-.51-.17-1.04-.25-1.6a6.94 6.94 0 00-.56-1.86 4.7 4.7 0 00-1.05-1.46c-.43-.41-.95-.73-1.55-.96-.6-.23-1.29-.34-2.08-.34s-1.5.07-2.13.21c-.63.14-1.26.3-1.89.49v2.78c.27-.12.56-.22.88-.31.31-.09.62-.16.92-.22.3-.05.59-.09.86-.12s.5-.04.69-.04c.56 0 1.01.13 1.35.38.34.25.62.58.82.98.21.4.36.85.46 1.36.1.5.19 1.01.26 1.51.05.34.13.67.24 1s.22.61.34.85h-11.2v-2.09c0-.88-.08-1.65-.25-2.32-.17-.67-.39-1.24-.67-1.72a4.49 4.49 0 00-.98-1.19c-.37-.31-.76-.56-1.17-.75-.41-.18-.84-.31-1.27-.38a7.71 7.71 0 00-1.24-.11c-.97 0-1.85.17-2.63.5-.78.33-1.45.78-2 1.34a5.89 5.89 0 00-1.28 1.96c-.3.74-.45 1.52-.45 2.34 0 .61.11 1.24.34 1.87.23.64.6 1.22 1.12 1.74.52.52 1.19.95 2.03 1.27.84.33 1.86.49 3.07.49h1.63c-.22.38-.54.73-.94 1.07-.4.34-.88.64-1.43.91-.55.27-1.18.49-1.88.67-.7.18-1.47.3-2.29.35l.32 2.89c1.15-.12 2.25-.33 3.28-.63 1.04-.31 1.98-.71 2.83-1.2a9.38 9.38 0 002.21-1.75 6.87 6.87 0 001.42-2.31h23.2V31.67zM267.43 48.1h-1.91c-1.13 0-1.96-.25-2.49-.75-.53-.5-.79-1.18-.79-2.04 0-.44.07-.84.22-1.21.15-.36.34-.68.59-.94.24-.26.52-.46.84-.61.32-.14.65-.22.99-.22.31 0 .62.06.93.18.31.12.58.34.82.67s.43.78.58 1.36c.15.58.22 1.33.22 2.26v1.3zM297.39 31.69h3.51v19.38h-3.51zM210.23 71.52c0 .41-.03.76-.09 1.07-.06.3-.18.57-.35.79-.17.22-.42.41-.73.56-.31.15-.72.28-1.23.37l.28 1.93c.78-.12 1.45-.3 2.01-.54.55-.24 1.01-.56 1.36-.97.35-.41.61-.91.78-1.51.16-.6.24-1.32.24-2.16v-5.55h-2.26v6.01zM220.79 63.03c.1.1.22.18.35.24.13.06.28.09.44.09.16 0 .3-.03.43-.09s.25-.14.35-.24c.1-.1.18-.22.24-.35.06-.13.09-.28.09-.43 0-.16-.03-.3-.09-.44-.06-.13-.14-.25-.24-.35-.1-.1-.22-.18-.35-.24-.13-.06-.28-.09-.43-.09-.16 0-.3.03-.44.09-.13.06-.25.14-.35.24-.1.1-.18.22-.24.35-.06.13-.09.28-.09.44 0 .16.03.3.09.43s.14.25.24.35zM229.78 74.37c-.1-.1-.22-.18-.35-.24-.13-.06-.28-.09-.43-.09-.16 0-.3.03-.44.09-.13.06-.25.14-.35.24-.1.1-.18.22-.24.35-.06.13-.09.28-.09.43s.03.3.09.44c.06.13.14.25.24.35.1.1.22.18.35.24.13.06.28.09.44.09.16 0 .3-.03.43-.09s.25-.14.35-.24c.1-.1.18-.22.24-.35.06-.13.09-.28.09-.44s-.03-.3-.09-.43a.846.846 0 00-.24-.35zM227.17 74.37c-.1-.1-.22-.18-.35-.24-.13-.06-.28-.09-.43-.09-.16 0-.3.03-.44.09-.13.06-.25.14-.35.24-.1.1-.18.22-.24.35-.06.13-.09.28-.09.43s.03.3.09.44c.06.13.14.25.24.35.1.1.22.18.35.24.13.06.28.09.44.09.16 0 .3-.03.43-.09s.25-.14.35-.24c.1-.1.18-.22.24-.35.06-.13.09-.28.09-.44s-.03-.3-.09-.43a1.09 1.09 0 00-.24-.35z"
          />
          <path
            className="prefix__st10"
            d="M229.16 65.52h-2.26v5.23H224.66c-.35 0-.7-.03-1.02-.09-.33-.06-.63-.15-.92-.26l.03-.3c.01-.1.01-.2.01-.31v-4.26h-2.26v3.96c0 .24-.02.45-.06.61-.04.16-.1.29-.19.39-.08.1-.19.16-.33.2-.14.04-.3.06-.49.06h-1.37c-.17 0-.33-.02-.46-.07a.618.618 0 01-.32-.23c-.08-.11-.15-.26-.19-.45a3.5 3.5 0 01-.07-.72v-9.13h-2.26v9.61c0 .43.05.82.16 1.18.1.36.27.66.49.91.22.25.51.45.85.59.35.14.76.21 1.25.21h2.69c.43 0 .8-.06 1.11-.19.3-.13.56-.3.76-.52.31.21.67.39 1.08.52.41.13.9.2 1.48.2h4.52v-7.14zM241.86 70.75h-2.07c-.38 0-.74-.03-1.08-.1-.35-.06-.67-.17-.96-.3.06-.27.1-.55.1-.84 0-.8-.3-1.64-.89-2.52-.59-.88-1.45-1.79-2.59-2.73l-1.64 1.6c.35.28.7.59 1.05.92.35.33.66.66.93.99s.5.66.67.99c.17.33.25.63.25.91 0 .16-.02.3-.06.43a.67.67 0 01-.24.34c-.12.1-.28.17-.5.22-.22.05-.5.08-.85.08h-3.34v1.91h3.3c.71 0 1.31-.08 1.8-.24.49-.16.89-.39 1.21-.67.32.27.71.49 1.16.66.41.15.92.23 1.5.25h4.52v-12.5h-2.26v10.6zM254.63 74.37c-.1-.1-.22-.18-.35-.24-.13-.06-.28-.09-.44-.09-.16 0-.3.03-.43.09s-.25.14-.35.24c-.1.1-.18.22-.24.35-.06.13-.09.28-.09.43s.03.3.09.44c.06.13.14.25.24.35.1.1.22.18.35.24.13.06.28.09.43.09.16 0 .3-.03.44-.09.13-.06.25-.14.35-.24.1-.1.18-.22.24-.35.06-.13.09-.28.09-.44s-.03-.3-.09-.43a.952.952 0 00-.24-.35zM254.57 65.52h-2.26v5.23h-2.61c-.17 0-.33-.02-.46-.07a.618.618 0 01-.32-.23c-.08-.11-.15-.26-.19-.45a3.5 3.5 0 01-.07-.72v-9.13h-2.26v9.61c0 .43.05.82.16 1.18.1.36.27.66.49.91.22.25.51.45.85.59.35.14.76.21 1.25.21h5.43v-7.13zM266.57 62.82c.13.06.28.09.44.09s.3-.03.43-.09.25-.14.35-.24.18-.22.24-.35.09-.28.09-.43c0-.16-.03-.3-.09-.44-.06-.13-.14-.25-.24-.35-.1-.1-.22-.18-.35-.24-.13-.06-.28-.09-.43-.09s-.3.03-.44.09c-.13.06-.25.14-.35.24-.1.1-.18.22-.24.35-.06.13-.09.28-.09.44 0 .16.03.3.09.43s.14.25.24.35c.1.1.22.18.35.24zM263.96 62.82c.13.06.28.09.43.09s.3-.03.44-.09c.13-.06.25-.14.35-.24.1-.1.18-.22.24-.35.06-.13.09-.28.09-.43 0-.16-.03-.3-.09-.44-.06-.13-.14-.25-.24-.35-.1-.1-.22-.18-.35-.24-.13-.06-.28-.09-.44-.09s-.3.03-.43.09-.25.14-.35.24c-.1.1-.18.22-.24.35-.06.13-.09.28-.09.44 0 .16.03.3.09.43s.14.25.24.35c.1.1.22.18.35.24zM274.79 74.37c-.1-.1-.22-.18-.35-.24-.13-.06-.28-.09-.43-.09s-.3.03-.44.09c-.13.06-.25.14-.35.24-.1.1-.18.22-.24.35-.06.13-.09.28-.09.43s.03.3.09.44c.06.13.14.25.24.35.1.1.22.18.35.24.13.06.28.09.44.09s.3-.03.43-.09.25-.14.35-.24c.1-.1.18-.22.24-.35.06-.13.09-.28.09-.44s-.03-.3-.09-.43a1.09 1.09 0 00-.24-.35zM272.18 74.37c-.1-.1-.22-.18-.35-.24-.13-.06-.28-.09-.44-.09s-.3.03-.43.09-.25.14-.35.24c-.1.1-.18.22-.24.35-.06.13-.09.28-.09.43s.03.3.09.44c.06.13.14.25.24.35.1.1.22.18.35.24.13.06.28.09.43.09s.3-.03.44-.09c.13-.06.25-.14.35-.24.1-.1.18-.22.24-.35.06-.13.09-.28.09-.44s-.03-.3-.09-.43a1.09 1.09 0 00-.24-.35zM284.7 66.16c-.31-.32-.68-.56-1.13-.73-.44-.17-.95-.25-1.51-.25-.57 0-1.1.1-1.58.29-.48.19-.9.46-1.25.8s-.63.74-.82 1.2c-.2.46-.3.95-.3 1.48 0 .34.05.67.14.99.09.33.21.59.34.81H275.87c-.35 0-.7-.03-1.02-.09-.33-.06-.63-.15-.92-.26l.03-.3c.01-.1.01-.2.01-.31v-4.26h-2.26v3.96c0 .24-.02.45-.06.61-.04.16-.1.29-.19.39-.08.1-.19.16-.33.2-.14.04-.3.06-.49.06h-1.54c-.18 0-.32-.02-.43-.05a.42.42 0 01-.25-.18.713.713 0 01-.12-.33c-.02-.14-.03-.31-.03-.52v-5.62h-2.25v.98c-.34.08-.71.18-1.11.3-.4.12-.8.26-1.21.42-.4.17-.79.36-1.17.58-.37.22-.71.47-1 .76-.29.28-.53.61-.7.96-.17.36-.26.76-.26 1.2 0 .5.1.93.31 1.28.21.36.47.65.8.87s.69.39 1.09.5c.4.11.8.16 1.18.16.39 0 .76-.04 1.11-.12.35-.08.72-.22 1.1-.42.08.16.18.3.3.44.13.14.29.26.49.36.2.1.44.18.73.24.28.06.62.09 1.02.09h2.71c.43 0 .8-.06 1.11-.19.3-.13.56-.3.76-.52.31.21.67.39 1.08.52.41.13.9.2 1.48.2h9.82V68.9c0-.58-.08-1.1-.25-1.56-.16-.47-.4-.86-.71-1.18zm-18.69 3.59c-.23.15-.5.27-.81.37-.31.09-.63.14-.96.14-.18 0-.36-.02-.54-.06-.18-.04-.34-.11-.48-.2-.14-.1-.26-.22-.35-.38-.09-.16-.13-.35-.13-.57 0-.28.08-.53.23-.76.15-.23.37-.43.66-.62.29-.18.63-.35 1.03-.49s.85-.27 1.35-.37v2.94zm17.39 1h-1.13c-.31 0-.59-.04-.84-.13a1.78 1.78 0 01-.63-.37c-.17-.16-.3-.36-.4-.58-.09-.23-.14-.48-.14-.75 0-.28.04-.53.13-.76.08-.23.2-.43.34-.59.14-.17.31-.29.5-.39.19-.09.4-.14.62-.14.2 0 .39.04.57.11.19.07.35.19.49.37.14.17.26.4.34.68.09.28.13.64.13 1.06v1.49zM281 62.24c0 .16.03.3.09.43s.14.25.24.35c.1.1.22.18.35.24.13.06.28.09.44.09.16 0 .3-.03.43-.09s.25-.14.35-.24c.1-.1.18-.22.24-.35.06-.13.09-.28.09-.43 0-.16-.03-.3-.09-.44-.06-.13-.14-.25-.24-.35-.1-.1-.22-.18-.35-.24-.13-.06-.28-.09-.43-.09-.16 0-.3.03-.44.09-.13.06-.25.14-.35.24-.1.1-.18.22-.24.35-.06.14-.09.29-.09.44zM300.74 62.24c0 .16.03.3.09.43s.14.25.24.35c.1.1.22.18.35.24.13.06.28.09.43.09.16 0 .3-.03.44-.09.13-.06.25-.14.35-.24.1-.1.18-.22.24-.35.06-.13.09-.28.09-.43 0-.16-.03-.3-.09-.44-.06-.13-.14-.25-.24-.35-.1-.1-.22-.18-.35-.24-.13-.06-.28-.09-.44-.09-.16 0-.3.03-.43.09s-.25.14-.35.24c-.1.1-.18.22-.24.35-.06.14-.09.29-.09.44zM307.1 66.18c-.32-.41-.73-.73-1.23-.96-.49-.23-1.08-.35-1.76-.35-.59 0-1.14.09-1.66.28-.52.19-1 .44-1.44.75-.44.31-.85.67-1.22 1.08-.37.41-.7.83-1 1.26a12.642 12.642 0 00-1.31 2.5 8.01 8.01 0 01-1.04-.11 2.97 2.97 0 01-1.02-.37c.02-.16.03-.31.03-.47v-2.54h-2.26v2.24c0 .24-.02.45-.06.61-.04.16-.1.29-.19.39-.08.1-.19.16-.33.2-.14.04-.3.06-.49.06h-1.08c-.17 0-.33-.02-.46-.07a.618.618 0 01-.32-.23c-.08-.11-.15-.26-.19-.45a3.5 3.5 0 01-.07-.72v-9.13h-2.26v9.61c0 .43.05.82.16 1.18.1.36.27.66.49.91.22.25.51.45.85.59.35.14.76.21 1.25.21h2.41c.49 0 .9-.08 1.23-.24.33-.16.59-.38.79-.64.38.32.86.55 1.44.68.58.14 1.26.2 2.03.2h9.65V69.4c0-.64-.08-1.23-.23-1.78-.15-.56-.39-1.03-.71-1.44zm-1.32 4.57h-6.1c.19-.54.43-1.05.73-1.54.3-.48.62-.91.98-1.28s.73-.66 1.13-.87c.4-.21.79-.32 1.18-.32.28 0 .55.05.81.14s.48.25.66.47c.19.22.33.51.44.87.11.37.17.82.17 1.36v1.17zM315.43 76.01c-.17-.15-.26-.32-.26-.52s.06-.34.17-.41c.12-.08.27-.12.45-.12.1 0 .22.01.37.03.15.02.27.03.36.05l.17-1.07c-.2-.03-.38-.06-.54-.07-.15-.01-.3-.01-.43-.01-.31 0-.57.04-.8.12-.22.08-.41.18-.55.31-.15.13-.25.28-.32.44-.07.17-.1.34-.1.51 0 .19.04.36.12.53.08.17.16.31.26.43h-.85v1.05h3.24v-1.05h-.5c-.35 0-.62-.07-.79-.22zM318.53 70.75h-2.3v-7.66h-2.27v7.66h-3.89v1.9h10.72v-12.5h-2.26zM323.24 60.16h2.26v12.51h-2.26z"
          />
        </g>
      </svg>
    </div>
  );
}

export default GreenCounter;
