from bs4 import BeautifulSoup

# HTMLファイルとCSSファイルのパス
html_file_path = r'D:\projects\atv2_generator_tmp\ASOBI TICKET.html'
css_file_path = r'D:\projects\atv2_generator_tmp\ASOBI TICKET_files\styles.css'

# HTMLファイルを読み込む
with open(html_file_path, 'r', encoding='utf-8') as file:
    html_content = file.read()

# BeautifulSoupを使ってHTMLを解析する
soup = BeautifulSoup(html_content, 'html.parser')

# すべての<style>タグを探す
style_tags = soup.find_all('style')

if style_tags:
    # CSSファイルを開いてCSSコンテンツを追加する
    with open(css_file_path, 'w', encoding='utf-8') as css_file:
        for style_tag in style_tags:
            css_content = style_tag.string
            if css_content:
                css_file.write(css_content)
                css_file.write('\n')  # 各スタイルの間に改行を追加
            
            # <style>タグを削除する
            style_tag.decompose()
    
    # <link>タグを作成して<head>タグ内に追加する
    link_tag = soup.new_tag('link', rel='stylesheet', href='ASOBI TICKET_files/styles.css')
    soup.head.append(link_tag)

    # 更新したHTMLを保存する
    with open(html_file_path, 'w', encoding='utf-8') as file:
        file.write(str(soup))

    print(f'CSSが {css_file_path} に外出しされ、HTMLファイルが更新されました。')
else:
    print('HTMLファイルに <style> タグが見つかりませんでした。')
