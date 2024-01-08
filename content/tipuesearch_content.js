var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'W1', 'text': '本課程所謂個人網站, 即 github帳號.github.io, 可由使用者自行設定內容, 建議長期維護後可用於研究所推甄, 或求職時使用. \n 本課程所謂評分網站, 即 github帳號.github.io/cp2023, 內容及維護歴程資料將用於課程評分. \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '說明安裝 Apps, 如何設定網路, 查驗是否正確連網 \n 說明如何利用近端可攜系統執行 C 程式, 如何利用 ChatGPT 進行對話 \n 說明如何利用 Replit 協助編輯網頁內容 \n 說明如何 connect Replit to Github, 如何建立個人網站並利用 Replit 啟動編輯網站 \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '採用 Github Classroom 建立作業倉儲的問題: \n 在w3課程進行到建立各學員 site 作業時發現, 將 Replit 導入 Github 倉儲的流程中, 所產生的系統間權限設定, 必須由 Github Classroom 管理帳號 (以 cp2023 為例, 附屬在 mdecp2023 帳號下), 針對各用戶所提出的個別 Replit 權限 requests (以 site-scrum-1 倉儲為例, 只能透過 Replit 提出控管 mdecp2023/site-scrum-1 倉儲的權限) \xa0 逐一進行設定 . \n \n (上圖顯示共有三名用戶針對 mdecp2023 帳號下的 Github Classroom 倉儲提出 Replit 連線要求, 其中只有最上方用戶的 request 取得 mdecp2023/site-scrum-1 倉儲的維護權限, 其餘兩則 requests 則仍處於待審核階段. 意即若要讓各用戶整合 Replit, \xa0 每一個 Github Classroom 作業, 管理者都必須手動處理超過兩百則的 requests ) \n 為去除管理者的手動設定負擔, 決定 2023 cp 與 cad 等課程將放棄使用 Github Classroom. 改為由各學員自行針對課程建立用來評分的課程倉儲與網站 (cp 課程建立 cp2023 倉儲, cad 課程則建立 cad2023 倉儲), 直接附屬在學員的 Github 帳號下, 後續的 submodule 設定與倉儲協同權限則統一由各學員自行負責. \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '自行利用\xa0 https://github.com/mdecycu/cmsite \xa0倉儲作為 template, 建立名稱為 cp2023 的評分倉儲 . \n 近端執行: \n SciTE 與 Tiny C Compiler 若要設定為 Tools - Compile 之後產生可執行檔案 a.out, cpp.properties 設定檔案必須修改如下: \n \n ccopts=-pedantic -Os\n#cc=g++ $(ccopts) -c $(FileNameExt) -o $(FileName).o\n#ccc=gcc $(ccopts) -c $(FileNameExt) -o $(FileName).o\ncc=tcc.exe -run \nccc=tcc.exe -o a.out\n \nmake.command=make\n#command.compile.*.c=$(ccc) -std=c99\ncommand.compile.*.c=$(ccc) $(FileNameExt)\ncommand.build.*.c=$(make.command)\ncommand.build.*.h=$(make.command)\ncommand.clean.*.c=$(make.command) clean\ncommand.clean.*.h=$(make.command) clean\n# use tcc to run .c program\n#command.go.*.c=./$(FileName)\ncommand.go.*.c=$(cc) $(FileNameExt) \n 雲端執行: \n 將位於個人 Github 帳號下的 cp2023 倉儲import 進入 Replit, 以 git submodule update --init 取下子模組, 然後以 pip install flask flask_cors bs4 lxml pelican markdown gevent 安裝啟動編輯網站所需模組後, 將 config/config 密碼編碼移至 Secrets 頁面中的 config 變數後啟動. \n 修改 replit.nix 如下, 表示要安裝 gnuplot 套件: \n { pkgs }: {\n  deps = [\n    pkgs.gnuplot\n  ];\n} \n 之後將所練習的 C 程式置於 downloads 目錄中, 其執行影像結果存入 images 後, 分別在網頁中引用. \n Exercises: \n 請從\xa0 jsliu_c_programming.pdf \xa0 (需要下載密碼)與\xa0 Introduction to C \xa0(經由校園網路或 VPN 下載)電子書中各擷取 10 個 C 程式範例, 分別: \n \n 在可攜程式環境中以 SciTE + Tiny C Compiler 編譯系統, 使用 Tools - Go 類編譯方式執行. \n 在可攜程式環境中以 SciTE + Tiny C Compiler 編譯系統, 使用 Tools - Compile 編譯連結後取得 a.out, 然後在命令列中以 a.out 執行. \n 在 Replit 全球資訊網 IDE 環境中的 Shell 頁面, 以 cc ex1.c 產生可執行檔案 a.out, 並以 ./a.out 執行, 或者以 cc ex1.c -o ex1 指定編譯連結後的可執行檔案名稱為 ex1 後, 以 ./ex1 執行. \n \n 最後將所選擇的 C 程式範例執行過程與相關說明內容, 整理在 個人 github 帳號下的 cp2023 倉儲網頁 中的 c_ex 頁面中. \n 參考: \n Introduction to the C programming Language ( 1 , \xa0 2 , \xa0 3 , or \xa0 download with password ) \n 使用者輸入兩個整數後相加的 C 程式範例: \n /* Read in two integers , add them and display the answer */\n#define _CRT_SECURE_NO_WARNINGS\n#include<stdio.h>\nint main()\n{\nint this_is_a_number1, this_is_a_number2, total;\nprintf("Please enter an integer number:\\n ");\n/* read number in */\nif (scanf("%d", &this_is_a_number1) == 1) {\n      printf("%d", this_is_a_number1);\n    } else {\n        printf("Failed to read integer.\\n");\n    }\n \nprintf("You entered %d\\n", this_is_a_number1);\nprintf("Please enter another number: \\n");\nif (scanf("%d", &this_is_a_number2) == 1) {\n      printf("%d", this_is_a_number1);\n    } else {\n      printf("Failed to read integer.\\n");\n    }\nprintf("You entered %d\\n", this_is_a_number2);\ntotal = this_is_a_number1 + this_is_a_number2;/* add two numbers */\nprintf("total is %d\\n", total);\nreturn 0;\n} \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '// 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit \n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n\n// 主函式\nint main() {\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n    fprintf(gnuplotPipe, "plot sin(x)");\n    // Close popen\n    pclose(gnuplotPipe);\n\n    return 0;\n} \n \n   // https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China\n  // 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621\n  // cc roc_flag_in_gd.c -lgd -lm to link with gd and math library\n  // https://www.rapidtables.com/web/color/RGB_Color.html\n  // 幾何形狀著色與繪圖練習\n  // 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖\n  #include <stdio.h>\n  #include <gd.h>\n  #include <math.h>\n\n  void draw_roc_flag(gdImagePtr img);\n  void draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n\n  int main() {\n      // width 3: height 2\n      int width = 1200;\n      // 國旗長寬比為 3:2\n      int height = (int)(width*2.0 / 3.0);\n\n      gdImagePtr img = gdImageCreateTrueColor(width, height);\n      gdImageAlphaBlending(img, 0);\n\n      draw_roc_flag(img);\n\n      FILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");\n      if (outputFile == NULL) {\n          fprintf(stderr, "Error opening the output file.\\n");\n          return 1;\n      }\n      gdImagePngEx(img, outputFile, 9);\n      fclose(outputFile);\n      gdImageDestroy(img);\n      return 0;\n  }\n\n  void draw_roc_flag(gdImagePtr img) {\n      int width = gdImageSX(img);\n      int height = gdImageSY(img);\n      int red, white, blue;\n      // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\n      int center_x = (int)(width/4);\n      int center_y = (int)(height/4);\n      // gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n      // 由於中央白日圓形的半徑為青天寬度的 1/8\n      // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n      // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\n      int sun_radius = (int)(width/8);\n      // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\n      int white_circle_dia = sun_radius;\n      // 中央藍色圓形半徑為中央白日的 1又 2/15\n      int blue_circle_dia = white_circle_dia +  white_circle_dia*2/15;\n      // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\n      red = gdImageColorAllocate(img, 255, 0, 0); // 紅色\n      white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n      blue = gdImageColorAllocate(img, 0, 0, 149); // 藍色\n      // 根據畫布大小塗上紅色長方形區域\n      gdImageFilledRectangle(img, 0, 0, width, height, red);\n      // 青天面積為整面國旗的 1/4, 也是採用長方形塗色\n      gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n      // 先設法以填色畫出六個白色堆疊菱形\n      draw_white_sun(img, center_x, center_y, sun_radius, white);\n      // 利用一個藍色大圓與白色小圓畫出藍色環狀\n      gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\n      gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n\n  }\n\n  void draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n      // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n      // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\n      float deg = M_PI/180;\n      // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n      // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\n      float sr = sun_radius/tan(75*deg);\n      int ax, ay, bx, by, dx, dy, ex, ey;\n      gdPoint points[4];\n      /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確\n      ax = center_x;\n      ay = center_y - sun_radius;\n      bx = center_x - sun_radius*tan(15*deg);\n      by = center_y;\n      ex = center_x;\n      ey = center_y + sun_radius;\n      dx = center_x + sun_radius*tan(15*deg);\n      dy = center_y;\n      // AB\n      gdImageLine(img, ax, ay, bx, by, color);\n      // BE\n      gdImageLine(img, bx, by, ex, ey, color);\n      // ED\n      gdImageLine(img, ex, ey, dx, dy, color);\n      // DA\n      gdImageLine(img, dx, dy, ax, ay, color);\n      */\n      ax = center_x;\n      ay = center_y - sun_radius;\n      bx = center_x - sun_radius*tan(15*deg);\n      by = center_y;\n      ex = center_x;\n      ey = center_y + sun_radius;\n      dx = center_x + sun_radius*tan(15*deg);\n      dy = center_y;\n      // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\n      for (int i=1;i<=6;i++){\n      // A\n      points[0].x = ax+sun_radius*sin(30*deg*i);\n      points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n      // B\n      points[1].x = bx+sr-sr*cos(30*deg*i);\n      points[1].y = by-sr*sin(30*deg*i);\n      // E\n      points[2].x = ex-sun_radius*sin(30*deg*i);\n      points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n      // D\n      points[3].x = dx-(sr-sr*cos(30*deg*i));\n      points[3].y = dy+sr*sin(30*deg*i);\n      // 對菱形區域範圍塗色\n      gdImageFilledPolygon(img, points, 4, color);\n      // 在菱形區域外圍畫線, 明確界定菱形範圍\n      gdImagePolygon(img, points, 4, color);\n      }\n  } \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '', 'tags': '', 'url': 'W6.html'}, {'title': 'Taiwan', 'text': '  // https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China\n  // 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621\n  // cc roc_flag_in_gd.c -lgd -lm to link with gd and math library\n  // https://www.rapidtables.com/web/color/RGB_Color.html\n  // 幾何形狀著色與繪圖練習\n  // 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖\n  #include <stdio.h>\n  #include <gd.h>\n  #include <math.h>\n\n  void draw_roc_flag(gdImagePtr img);\n  void draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n\n  int main() {\n      // width 3: height 2\n      int width = 1200;\n      // 國旗長寬比為 3:2\n      int height = (int)(width*2.0 / 3.0);\n\n      gdImagePtr img = gdImageCreateTrueColor(width, height);\n      gdImageAlphaBlending(img, 0);\n\n      draw_roc_flag(img);\n\n      FILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");\n      if (outputFile == NULL) {\n          fprintf(stderr, "Error opening the output file.\\n");\n          return 1;\n      }\n      gdImagePngEx(img, outputFile, 9);\n      fclose(outputFile);\n      gdImageDestroy(img);\n      return 0;\n  }\n\n  void draw_roc_flag(gdImagePtr img) {\n      int width = gdImageSX(img);\n      int height = gdImageSY(img);\n      int red, white, blue;\n      // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\n      int center_x = (int)(width/4);\n      int center_y = (int)(height/4);\n      // gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n      // 由於中央白日圓形的半徑為青天寬度的 1/8\n      // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n      // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\n      int sun_radius = (int)(width/8);\n      // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\n      int white_circle_dia = sun_radius;\n      // 中央藍色圓形半徑為中央白日的 1又 2/15\n      int blue_circle_dia = white_circle_dia +  white_circle_dia*2/15;\n      // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\n      red = gdImageColorAllocate(img, 255, 0, 0); // 紅色\n      white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n      blue = gdImageColorAllocate(img, 0, 0, 149); // 藍色\n      // 根據畫布大小塗上紅色長方形區域\n      gdImageFilledRectangle(img, 0, 0, width, height, red);\n      // 青天面積為整面國旗的 1/4, 也是採用長方形塗色\n      gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n      // 先設法以填色畫出六個白色堆疊菱形\n      draw_white_sun(img, center_x, center_y, sun_radius, white);\n      // 利用一個藍色大圓與白色小圓畫出藍色環狀\n      gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\n      gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n\n  }\n\n  void draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n      // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n      // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\n      float deg = M_PI/180;\n      // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n      // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\n      float sr = sun_radius/tan(75*deg);\n      int ax, ay, bx, by, dx, dy, ex, ey;\n      gdPoint points[4];\n      /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確\n      ax = center_x;\n      ay = center_y - sun_radius;\n      bx = center_x - sun_radius*tan(15*deg);\n      by = center_y;\n      ex = center_x;\n      ey = center_y + sun_radius;\n      dx = center_x + sun_radius*tan(15*deg);\n      dy = center_y;\n      // AB\n      gdImageLine(img, ax, ay, bx, by, color);\n      // BE\n      gdImageLine(img, bx, by, ex, ey, color);\n      // ED\n      gdImageLine(img, ex, ey, dx, dy, color);\n      // DA\n      gdImageLine(img, dx, dy, ax, ay, color);\n      */\n      ax = center_x;\n      ay = center_y - sun_radius;\n      bx = center_x - sun_radius*tan(15*deg);\n      by = center_y;\n      ex = center_x;\n      ey = center_y + sun_radius;\n      dx = center_x + sun_radius*tan(15*deg);\n      dy = center_y;\n      // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\n      for (int i=1;i<=6;i++){\n      // A\n      points[0].x = ax+sun_radius*sin(30*deg*i);\n      points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n      // B\n      points[1].x = bx+sr-sr*cos(30*deg*i);\n      points[1].y = by-sr*sin(30*deg*i);\n      // E\n      points[2].x = ex-sun_radius*sin(30*deg*i);\n      points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n      // D\n      points[3].x = dx-(sr-sr*cos(30*deg*i));\n      points[3].y = dy+sr*sin(30*deg*i);\n      // 對菱形區域範圍塗色\n      gdImageFilledPolygon(img, points, 4, color);\n      // 在菱形區域外圍畫線, 明確界定菱形範圍\n      gdImagePolygon(img, points, 4, color);\n      }\n  } \n \n \n', 'tags': '', 'url': 'Taiwan.html'}, {'title': 'Japan', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\nint originalWidth = 1200;\nint originalHeight = (int)(originalWidth * 2.0 / 3.0);\ngdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight);\ngdImageAlphaBlending(img, 0);\n\ndraw_japan_flag(img);\n\n// 新的宽度和高度以适应 "images" 文件夹\nint newWidth = 600;\nint newHeight = (int)(newWidth * 2.0 / 3.0);\n\n// 创建新图像并进行缩放\ngdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight);\ngdImageAlphaBlending(resizedImage, 0);\ngdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight);\n\nFILE *outputFile = fopen("./../images/japan_flag.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "Error opening the output file.\\n");\nreturn 1;\n}\ngdImagePng(resizedImage, outputFile);\nfclose(outputFile);\ngdImageDestroy(img);\ngdImageDestroy(resizedImage);\n\nreturn 0;\n}\n\nvoid draw_japan_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\n\n// 创建一个白色背景\nint white = gdImageColorAllocate(img, 255, 255, 255);\ngdImageFilledRectangle(img, 0, 0, width - 1, height - 1, white);\n\n// 绘制红色圆圈（太阳）\nint red = gdImageColorAllocate(img, 255, 0, 0);\nint center_x = width / 2;\nint center_y = height / 2;\nint radius = (int)((width * 2) / 3);\ndraw_red_sun(img, center_x, center_y, radius, red);\n}\n\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color) {\n// 減小 size 的值,例如將他的值減半\nsize = size / 2;\ngdImageArc(img, x, y, size, size, 0, 360, color);\ngdImageFillToBorder(img, x, y, color, color);\n} \n \n', 'tags': '', 'url': 'Japan.html'}, {'title': 'UK', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_uk_flag(gdImagePtr img);\nvoid fillTriangle(gdImagePtr img, int x1, int y1, int x2, int y2, int x3, int y3, int color);\n\nint main() {\n// 设置国旗的宽和高\nint width = 1200;\nint height = width / 2;\n\n// 创建图像\ngdImagePtr img = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(img, 0);\n\n// 绘制英国国旗\ndraw_uk_flag(img);\n\n// 将图像保存到文件\nFILE *outputFile = fopen("./../images/uk_flag.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "打开输出文件时发生错误。\\n");\nreturn 1;\n}\ngdImagePngEx(img, outputFile, 9);\nfclose(outputFile);\ngdImageDestroy(img);\nreturn 0;\n}\n\n\n\nvoid draw_uk_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\n\nint red, white, blue;\nred = gdImageColorAllocate(img, 204, 0, 0); // 红色\nwhite = gdImageColorAllocate(img, 255, 255, 255); // 白色\nblue = gdImageColorAllocate(img, 0, 0, 153); // 蓝色\n\ngdImageFilledRectangle(img, 0, 0, width, height, blue);\n\n\nint x1, y1, x2, y2, x3, y3;\n{\nint line_thickness = 100;\ngdImageSetThickness(img, line_thickness);\n\nint x1, y1, x2, y2, x3, y3;\n\n// 绘制白色斜线\nx1 = 0;\ny1 = 600;\nx2 = 1200;\ny2 = 0;\ngdImageLine(img, x1, y1, x2, y2, white);\n\nx1 = 0;\ny1 = 0;\nx2 = 1200;\ny2 = 600;\ngdImageLine(img, x1, y1, x2, y2, white);\n}\n{\nint line_thickness = 33;\ngdImageSetThickness(img, line_thickness);\n\n\n// 绘制红色斜线\nx1 = 566;\ny1 = 300;\nx2 = 1166;\ny2 = 0;\ngdImageLine(img, x1, y1, x2, y2, red);\n\nx1 = 1233;\ny1 = 600;\nx2 = 633;\ny2 = 300;\ngdImageLine(img, x1, y1, x2, y2, red);\n\nx1 = 566;\ny1 = 300;\nx2 = -33;\ny2 = 0;\ngdImageLine(img, x1, y1, x2, y2, red);\n\nx1 = 600;\ny1 = 316.5;\nx2 = 0;\ny2 = 616.5;\ngdImageLine(img, x1, y1, x2, y2, red);\n}\n{\nint line_thickness = 33;\ngdImageSetThickness(img, line_thickness);\n\nint x1, y1, x2, y2, x3, y3;\n\n// 绘制 斜线\nx1 = 0;\ny1 = 600;\nx2 = 1200;\ny2 = 0;\ngdImageLine(img, x1, y1, x2, y2, red );\n\n\nx1 = 1200;\ny1 = 16.5;\nx2 = 600;\ny2 = 316.5;\ngdImageLine(img, x1, y1, x2, y2, white);\n\n\nx1 = 0;\ny1 = 583.5;\nx2 = 600;\ny2 = 283.5;\ngdImageLine(img, x1, y1, x2, y2, white);\n\n\n}\n\n// 绘制白色十字\nint cross_width = width / 32;\nint cross_arm_width = width / 32;\nint center_x = width / 2;\nint center_y = height / 2;\n\ngdImageFilledRectangle(img, center_x + 2.7 * cross_width, 0, center_x - 2.7 * cross_width, height, white);\ngdImageFilledRectangle(img, 0, center_y + 2.7 * cross_arm_width, width, center_y - 2.7 * cross_arm_width, white);\n\n// 绘制红色十字\ngdImageFilledRectangle(img, center_x + 1.5 * cross_width, 0, center_x - 1.5 * cross_width, height, red);\ngdImageFilledRectangle(img, 0, center_y + 1.5 * cross_arm_width, width, center_y - 1.5 * cross_arm_width, red);\n}\n \n \n', 'tags': '', 'url': 'UK.html'}, {'title': 'W7', 'text': 'Map: site map 網站所有頁面 \n EditA: edit all pages, 使用時機為(1)解決多人共用網站時的衝突, 或(2)刪除特定頁面 \n Edit: edit one page, 先選頁面, 再選 Edit 然後才能進入編輯模式 \n Config: 編輯網站標題, 若要編輯 site title, 必須更改 init.py 中的 site_title 字串內容 \n Search: 頁面資料 html 原始碼內容搜尋 \n IUpload: image upload, 影像檔案上傳, 資料會放入 images 目錄中 \n IList: image file list, 列出存在 images 目錄下的影像檔案 \n FUpload: file upload, 一般檔案上傳功能, 資料會放入 downloads 目錄中 \n FList: file list, 列出位於 downloads 目錄下的檔案 \n Logout: 登出 \n Convert: 將 config/content.htm 經過分頁程式處理後, 轉為 content 目錄下的超文件 \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W10', 'text': '快速設定電腦輔助設計室中的網路 - 採 IPv6 網路設定. \n 請檢查隨身碟中的網路設定程式, 確認帶有可攜程式環境以及網路設定相關檔案. \n 目的是能夠在啟動隨身系統之後, 可以透過 rsa private key 以 SSH 取下個人倉儲, 並能啟動編輯後轉檔, 擁有推送回 github 的權限. \n 各組組長能夠在取下分組倉儲後, 以個人 IPv6 位址啟動後, 允許分組組員登入修改網頁內容, 並透過組長的 rsa private key 推送回 github. \n 個人與分組組員能在近端編寫 C 程式, 完成編譯連結後將程式碼與結果放入網頁, 並編寫相關心得報告. \n 以上近端操作流程, 也可以在 s1511 與 Replit 伺服器上進行個人與分組倉儲及網頁的改版. \n w11_1a.7z \xa0(第十一週 1a 上課時建立的共用網路設定檔案) \n wink_ffmpeg.reg 設定檔案內容: \n Windows Registry Editor Version 5.00\n  \n[HKEY_CURRENT_USER\\SOFTWARE\\Debugmode]\n  \n[HKEY_CURRENT_USER\\SOFTWARE\\Debugmode\\Wink\\Settings]\n"FfmpegPath"="y:\\\\ffmpeg.exe" \n 2a_w10_start_ipv6_wink_reg.7z  (可以將此  wink 登錄設定檔 , 連同 網路設定 ,  Zoomit 啟動 與  putty setting  設定, 以  reg import  指令整合至 tinyc 可攜程式系統的 start_ipv6.bat 中). \n \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '// 包含標準輸出入程式庫的標頭文件\n#include <stdio.h>\n\xa0\xa0\n// 主函式\nint main() {\n\xa0\xa0\xa0\xa0// Open a file to write displacement and velocity data\n\xa0\xa0\xa0\xa0FILE *outputFile = fopen("motion_data.txt", "w");\n\xa0\xa0\xa0\xa0if (!outputFile) {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0fprintf(stderr, "Failed to create data file.\\n");\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return 1;\n\xa0\xa0\xa0\xa0}\n\xa0\xa0\n\xa0\xa0\xa0\xa0// Simulate motion for 10 seconds and calculate displacement and velocity, while writing data to the file\n\xa0\xa0\xa0\xa0double x = 0.2;\xa0 // Initial displacement\n\xa0\xa0\xa0\xa0double v = 0.0;\xa0 // Initial velocity\n\xa0\xa0\xa0\xa0double dt = 0.01; // Time step\n\xa0\xa0\xa0\xa0double t = 0.0;\xa0 // Time\n\xa0\xa0\n\xa0\xa0\xa0\xa0while (t <= 10.0) {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0double acceleration = (-10.0 * x - 0.5 * v) / 1.0; // Modified system parameters here\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0v += acceleration * dt;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0x += v * dt;\n\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0fprintf(outputFile, "%lf %lf %lf\\n", t, x, v);\n\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0t += dt;\n\xa0\xa0\xa0\xa0}\n\xa0\xa0\n\xa0\xa0\xa0\xa0// Close the data file\n\xa0\xa0\xa0\xa0fclose(outputFile);\n\xa0\xa0\n\xa0\xa0\xa0\xa0// Start a Gnuplot process using popen\n\xa0\xa0\xa0\xa0FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n\xa0\xa0\xa0\xa0if (!gnuplotPipe) {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0fprintf(stderr, "Failed to start Gnuplot.\\n");\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return 1;\n\xa0\xa0\xa0\xa0}\n\xa0\xa0\n\xa0\xa0\xa0\xa0// Use Gnuplot plotting commands, specify font and output as PNG\n\xa0\xa0\xa0\xa0fprintf(gnuplotPipe, "set terminal pngcairo enhanced font \'default,10\' size 800,400\\n");\n\xa0\xa0\xa0\xa0fprintf(gnuplotPipe, "set output \'./../images/motion_plot.png\'\\n");\n\xa0\xa0\xa0\xa0fprintf(gnuplotPipe, "set title \'Displacement and Velocity vs. Time\'\\n");\n\xa0\xa0\xa0\xa0fprintf(gnuplotPipe, "set xlabel \'Time (s)\'\\n");\n\xa0\xa0\xa0\xa0fprintf(gnuplotPipe, "set ylabel \'Displacement (m)\'\\n");\n\xa0\xa0\xa0\xa0fprintf(gnuplotPipe, "plot \'motion_data.txt\' using 1:2 with lines lw 2 title \'Displacement\', \\\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\'motion_data.txt\' using 1:3 with lines lw 2 title \'Velocity\'\\n");\n\xa0\xa0\n\xa0\xa0\xa0\xa0// Close the Gnuplot process\n\xa0\xa0\xa0\xa0fprintf(gnuplotPipe, "exit\\n");\n\xa0\xa0\xa0\xa0pclose(gnuplotPipe);\n\xa0\xa0\n\xa0\xa0\xa0\xa0return 0;\n} \n \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W13', 'text': '在上這堂課前，有稍微聽認識的學姊講嚴家明老師的課不好過，上兩次課就發現，要登入很多程式，我甚至每次都忘記密碼，改了好幾次，光登入都有問題了，一開始就挫折感滿滿。在上計算中我所遇到的困境應該與班上的各位一致，也就是根本聽不懂老師您口中說的任何一個專有名詞，例如:倉儲、KEY.....之類的，在第一次接觸沒有基礎的情況下，老師可能覺得我們應該要知道，沒有做太多的解釋，就讓我們自行操作，大家都很不知所措的到處問可能有一點基礎的人，老師很積極的想讓我們知道這堂課要做甚麼這堂課在教什麼，即使您說的是中文也錄影給我們看了，但很多時候我們還是聽不懂老師上課的內容。但後來老師也放慢腳步讓我們更好的學習更好的知道這堂課在教什麼，希望以後可以在這堂課聽得懂老師所教的內容。 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'ANSIC', 'text': '', 'tags': '', 'url': 'ANSIC.html'}, {'title': '1', 'text': 'Write a C program to print your name, date of birth, and mobile number.  \n #include <stdio.h>\n\nint main()  \n{\n    // Print Name\n    printf("Name   : 許舒閑\\n"); \n\n    // Print Date of Birth\n    printf("DOB    : October 26, 2004\\n"); \n\n    // Print Mobile Number\n    printf("Mobile : 0988-629882\\n"); \n\n    // Indicate successful execution\n    return(0); \n} \n \n \n #include <stdio.h> ：此行包含 標準輸入輸出庫 ，其中包含從控制台讀取和寫入資料的函數。 \n int main() ：這是程式的主函數， 從這裡開始執行 。它傳回一個整數值，通常為 0，表示執行成功。 \n 在「main()」函數內部，有三個printf語句。“printf()”函數用於將格式化文字列印到控制台。每個 printf 語句列印一行包含特定資訊的文字： \n \n printf("姓名 \\ n"); \xa0 列印“Name : Alexandra Abramov”，後面跟著換行符， 將遊標移到下一行 。 \n printf("出生日期\\n"); \xa0 印出“DOB : July 14, 1975”，後面跟著換行符。 \n printf("手機\\n"); \xa0 列印“Mobile : 99-9999999999”，後面跟著換行符。 \n \n return(0);：這一行表示主函數結束，回傳0。 \n \n \n', 'tags': '', 'url': '1.html'}, {'title': '2', 'text': 'Write a C program to print the following characters in reverse.  \n \n #include <stdio.h>\n//4\nint main() \n{\n// Declare and initialize character variables\nchar char1 = \'E\';\nchar char2 = \'F\';\nchar char3 = \'G\';\n\n// Print the original and reversed characters\nprintf("The reverse of %c%c%c is %c%c%c\\n",\nchar1, char2, char3,\nchar3, char2, char1);\n\nreturn(0);\n} \n', 'tags': '', 'url': '2.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};