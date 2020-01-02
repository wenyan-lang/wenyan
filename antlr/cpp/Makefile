OUTPUT=output
GENERATED=generated
RUNTIME=./antlr4-runtime
CCARGS=-c -I $(RUNTIME) -I $(GENERATED) -std=c++11	
LDARGS=-g
LIBS=./lib/libantlr4-runtime.a
CC=g++
GRAMMAR=wenyan
ANTLR4=java -jar /usr/local/lib/antlr-4.7.2-complete.jar 
COMPILER=wenyanCompiler

ANTLRGEN=Lexer Parser 
OBJS=$(addsuffix .o,$(addprefix $(OUTPUT)/$(GRAMMAR),$(ANTLRGEN)))
GSOURCES=$(addsuffix .cpp,$(addprefix $(GENERATED)/$(GRAMMAR),$(ANTLRGEN)))

.precious: $(GSOURCES)

all: ${COMPILER} 

${COMPILER}: dirs antlr4 ${COMPILER}.cpp $(OBJS)
	$(CC) $(CCARGS) ${COMPILER}.cpp -o $(OUTPUT)/${COMPILER}.o 
	$(CC) $(LDARGS) $(OUTPUT)/${COMPILER}.o $(OBJS) $(LIBS) -o ${COMPILER}

antlr4: $(GENERATED)/.generated;
 
$(GENERATED)/.generated: $(GRAMMAR).g4
	$(ANTLR4) -Dlanguage=Cpp -no-listener -o $(GENERATED) $(GRAMMAR).g4
	@touch $(GENERATED)/.generated

$(OUTPUT)/%.o : $(GENERATED)/%.cpp
	$(CC) $(CCARGS) $< -o $@

$(GENERATED)/%.cpp: $(GENERATED)/.generated;

dirs:; mkdir -p $(OUTPUT) $(GENERATED) 
clean:; rm -rf $(OUTPUT) $(GENERATED)
