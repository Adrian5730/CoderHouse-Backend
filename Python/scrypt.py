import pyautogui
import keyboard
import time
import win32api ,win32con
# pyautogui.displayMousePosition()




def click(x,y):
    win32api.SetCursorPos((x,y))
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN,0,0)
    time.sleep(0.5)
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP,0,0)


# X:  1017 Y:  408 RGB: (158,  43,  46) Rojo 1
# X:  1211 Y:  403 RGB: ( 67, 157,   8) Verde 2
# X:  1242 Y:  571 RGB: (188, 179,   0) Amarillo 3
# X:  1006 Y:  571 RGB: ( 54, 123, 252) Azul 4 


def colorcheck(x, listen):
    if pyautogui.pixel(1017, 408)[0] != 158:
        while pyautogui.pixel(1017, 408)[0] != 158:
            time.sleep(0.10)
        print("Rojo")
        x += 1
        if x > len(color_a_apretar):
            color_a_apretar.append(1)
            listen = False
            
    if pyautogui.pixel(1211, 403)[0] != 67:
        while pyautogui.pixel(1211, 403)[0] != 67:
            time.sleep(0.10)
        print("Verde")
        x += 1
        if x > len(color_a_apretar):
            color_a_apretar.append(2)
            listen = False
            
    if pyautogui.pixel(1242, 571)[0] != 188:
        while pyautogui.pixel(1242, 571)[0] != 188:
            time.sleep(0.10)
        print("Amarillo")
        x += 1
        if x > len(color_a_apretar):
            color_a_apretar.append(3)
            listen = False
            
    if pyautogui.pixel(1006, 571)[0] != 54:
        while pyautogui.pixel(1006, 571)[0] != 54:
            time.sleep(0.10)
        print("Azul")
        x += 1
        if x > len(color_a_apretar):
            color_a_apretar.append(4)
            listen = False

    return x, listen


color_a_apretar = []

x = 0
listen = True

while 1:
    if keyboard.is_pressed('q'):
        while 1:
            if listen:
                x, listen = colorcheck(x, listen)
            else:
                for number in color_a_apretar:
                    if number == 1:  # Rojo
                        click(1017, 408)
                    if number == 2:  # Verde
                        click(1211, 403)
                    if number == 3:  # Amarillo
                        click(1242, 571)
                    if number == 4:  # Azul
                        click(1006, 571)

                time.sleep(0.5)

                listen = True
                x = 0
