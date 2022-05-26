import pyautogui
import keyboard
import time
import win32api
import win32con

# from scrypt import click

# pyautogui.displayMousePosition()

# X:  345 Y:  397 RGB: (177, 182, 234)
# X:  433 Y:  392 RGB: (255, 255, 255)
# X:  511 Y:  388 RGB: (255, 255, 255)
# X:  602 Y:  381 RGB: (  0,   0,   0)


def click(x, y):
    win32api.SetCursorPos((x, y))
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN, 0, 0)
    time.sleep(0.01)
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP, 0, 0)


def colorChequeo():
    if pyautogui.pixel(345, 350)[0] == 0:
        click(345, 350)
        # time.sleep(0.1)

    if pyautogui.pixel(433, 350)[0] == 0:
        click(433, 350)
        # time.sleep(0.1)

    if pyautogui.pixel(511, 350)[0] == 0:
        click(511, 350)

        # time.sleep(0.1)

    if pyautogui.pixel(602, 350)[0] == 0:
        click(602, 350)
        # time.sleep(0.1)




x = 0

while 1:
    if keyboard.is_pressed('e'):
        
        while 1:
            colorChequeo()
            
            # if x == 1:
            #     click(876, 645)

            # if x == 2:
            #     click(942, 645)

            # if x == 3:
            #     click(1013, 645)

            # if x == 4:
            #     click(1072, 645)
