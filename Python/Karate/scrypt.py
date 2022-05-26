import cv2
import numpy as np

palito_img = cv2.imread('palo.png', cv2.IMREAD_UNCHANGED)
juego_img = cv2.imread('karate.png', cv2.IMREAD_UNCHANGED)

cv2.imshow('Palito', palito_img)
cv2.waitKey()
cv2.destroyAllWindows()

cv2.imshow('Juego', juego_img)
cv2.waitKey()
cv2.destroyAllWindows()

result = cv2.matchTemplate(juego_img, palito_img, cv2.TM_CCOEFF_NORMED)
cv2.imshow('Result', result)
cv2.waitKey()
cv2.destroyAllWindows()

min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)

print(max_loc)
print(max_val)

w = palito_img.shape[1]
h = palito_img.shape[0]

threshold = .70
yloc, xloc = np.where(result >= threshold)

print(len(xloc))

rectangles = []
for(x, y) in zip(xloc, yloc):
    rectangles.append([int(x), int(y), int(w), int(h)])
    rectangles.append([int(x), int(y), int(w), int(h)])

print(len(rectangles))

rectangles, weights = cv2.groupRectangles(rectangles, 1, 0.2)

print(len(rectangles))


for(x, y, w, h) in rectangles:
    cv2.rectangle(juego_img, (x, y), (x + w, y + h), (255, 0, 0), 2)


cv2.imshow('Juego', juego_img)
cv2.waitKey()
cv2.destroyAllWindows()